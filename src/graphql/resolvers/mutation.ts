import { Prisma } from '@prisma/client'
import { ApolloError, UserInputError } from 'apollo-server-errors'
import * as argon from 'argon2'
import ColorThief from 'colorthief'
import jwt from 'jsonwebtoken'

import { ColorsTuple } from '@/components/Palette'
import { rgbToHex } from '@/graphql/resolvers/utils'
import { prisma } from '@/lib/prisma'

import { MutationResolvers } from '../generated/graphql'

const Mutation: MutationResolvers = {
  generateColors: async (_, { imageUrl }) => {
    const getColors = async (): Promise<ColorsTuple | undefined> => {
      try {
        //This function returns an array of rgb color codes in this format - [red: number, green: number, blue: number][]
        const colors = await ColorThief.getPalette(imageUrl!, 8, 10)
        //Converting the rgb color codes to HEX color codes
        const palette = colors.map((color) => rgbToHex(color))
        return palette as ColorsTuple
      } catch (error: unknown) {
        if (error as Error) {
          throw new ApolloError('Oops, something went wrong')
        }
      }
    }
    const colors = await getColors()
    return { colors: colors! }
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
  signUp: async (_, { username, password }) => {
    //Generate password hash
    const hash = await argon.hash(password)
    try {
      const admin = await prisma.admin.create({
        data: {
          username: username!,
          hash,
        },
      })
      //Return admin username
      return admin.username
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        console.log('Credentials taken')
      }
      throw error
    }
  },

  logIn: async (_, { username, password }) => {
    // find the admin by email
    const admin = await prisma.admin.findUnique({
      where: {
        username: username!,
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
