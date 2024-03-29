import { Prisma } from '@prisma/client'
import { ApolloError, UserInputError } from 'apollo-server-errors'
import * as argon from 'argon2'
import ColorThief from 'colorthief'
import jwt from 'jsonwebtoken'
import { nanoid } from 'nanoid'

import { ColorsTuple } from '@/components/palette'
import { uploadFile } from '@/lib/aws'
import { prisma } from '@/lib/prisma'
import { getColorsForExport, rgbToHex } from '@/utils'

import { MutationResolvers } from '../generated/graphql'

const Mutation: MutationResolvers = {
  exportColors: async (_, { colors, type }) => {
    if (!(type === 'css' || type === 'code')) {
      throw new UserInputError('Invalid type, must be "css" or "code"')
    }
    const colorsForExport = getColorsForExport(type, colors as ColorsTuple)
    let awsUploadedFile
    try {
      const getFileName = () => {
        const fileName =
          type === 'css'
            ? `css/${nanoid()}/colors.scss`
            : `code/${nanoid()}/colors.js`
        return process.env.NODE_ENV === 'development'
          ? `narefacts-dev-uploads/colors/${fileName}`
          : `narefacts-uploads/colors/${fileName}`
      }
      awsUploadedFile = await uploadFile(getFileName(), colorsForExport)
    } catch (err) {
      console.error(err)
      throw new ApolloError('Oops, something went wrong')
    }
    return awsUploadedFile.Location
  },

  generateColors: async (_, { imageUrl }) => {
    const getColors = async () => {
      try {
        const colors = await ColorThief.getPalette(imageUrl!, 8, 10)
        const palette = colors.map((color) => rgbToHex(color)) as ColorsTuple
        return palette
      } catch (error: unknown) {
        if (error as Error) {
          throw new ApolloError('Oops, something went wrong')
        }
      }
    }
    const colors = await getColors()
    return { colors: colors || [] }
  },

  //Album
  addAlbum: async (_, { input }) => {
    const album = await prisma.albums.create({
      data: {
        v: 0,
        title: input?.title || '',
        type: input?.type || '',
        albumArt: input?.albumArt || '',
        likeCount: input?.likeCount || 0,
        artist: {
          name: '',
          photoURL: '',
        },
        urls: {
          spotify: input?.urls?.spotify || '',
          apple: input?.urls?.apple || '',
        },
        colors: input?.colors,
      },
    })

    return album
  },

  updateAlbum: async (_, { albumID, input }) => {
    const updateAlbum = await prisma.albums.update({
      where: {
        id: albumID,
      },
      data: {
        v: 0,
        title: input?.title || '',
        type: input?.type || '',
        albumArt: input?.albumArt || '',
        likeCount: input?.likeCount || 0,
        artist: {
          name: '',
          photoURL: '',
        },
        urls: {
          spotify: input?.urls?.spotify || '',
          apple: input?.urls?.apple || '',
        },
        colors: input?.colors,
      },
    })
    return updateAlbum
  },

  deleteAlbum: async (_, { albumID }) => {
    const deleteAlbum = await prisma.albums.delete({
      where: {
        id: albumID,
      },
    })
    return deleteAlbum ? true : false
  },

  //Social
  addToLike: async (_, { albumID }) => {
    const updateAlbum = await prisma.albums.update({
      where: {
        id: albumID,
      },
      data: {
        likeCount: {
          increment: 1,
        },
      },
    })
    return updateAlbum ? true : false
  },

  removeFromLike: async (_, { albumID }) => {
    const updateAlbum = await prisma.albums.update({
      where: {
        id: albumID,
      },
      data: {
        likeCount: {
          decrement: 1,
        },
      },
    })
    return updateAlbum ? true : false
  },

  //Auth
  signUp: async (_, { email, password }) => {
    //Generate password hash
    const hash = await argon.hash(password!)
    try {
      const admin = await prisma.admin.create({
        data: {
          email: email,
          hash,
        },
      })
      //Return admin username
      return admin.email
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        console.log('Credentials taken')
      }
      throw error
    }
  },

  logIn: async (_, { email, password }) => {
    // find the admin by email
    const admin = await prisma.admin.findUnique({
      where: {
        email: email,
      },
    })
    // if user does not exist throw exception
    if (!admin) throw new UserInputError('Credentials incorrect')

    // compare password
    const passwordMatch = await argon.verify(admin.hash, password)

    // if password does not match
    if (!passwordMatch) throw new UserInputError('Credentials incorrect')

    // create and return the json web token
    return jwt.sign({ id: admin?.id }, process.env.JWT_SECRET!)
  },

  updateAnalytics: async (_, { id }) => {
    const updateAnalytics = await prisma.analytics.update({
      where: {
        id: id,
      },
      data: {
        generatedPalettes: {
          increment: 1,
        },
      },
    })
    return updateAnalytics
  },
}

export default Mutation
