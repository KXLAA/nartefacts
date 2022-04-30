import { Prisma } from '@prisma/client'
import { MutationResolvers } from '../generated/graphql'
import ColorThief from 'colorthief'
import { ApolloError, UserInputError } from 'apollo-server-errors'
import * as argon from 'argon2'
import jwt from 'jsonwebtoken'
import { prisma } from '../../lib/prisma'
import { rgbToHex } from './utils'
import { colorsTuple } from 'components/Palette'

const Mutation: MutationResolvers = {
  generateColors: async (_, { imageUrl }) => {
    const getColors = async (): Promise<colorsTuple | undefined> => {
      try {
        //This function returns an array of rgb color codes in this format - [red: number, green: number, blue: number][]
        const colors = await ColorThief.getPalette(imageUrl!, 8)
        //Converting the rgb color codes to HEX color codes
        const palette = colors.map((color) => rgbToHex(color))
        return palette as colorsTuple
      } catch (error: unknown) {
        if (error as Error) {
          throw new ApolloError('Oops, something went wrong')
        }
      }
    }
    const colors = await getColors()
    return { colors: colors! }
  },

  //Artist
  addArtist: async (_, { input }) => {
    const artist = await prisma.artist.create({
      data: {
        name: input?.name || '',
        biography: input?.biography || '',
        photoUrl: input?.photoUrl || '',
      },
    })
    return artist
  },

  updateArtist: async (_, { artistID, input }) => {
    const updateArtist = await prisma.artist.update({
      where: {
        id: artistID,
      },
      data: {
        name: input?.name || '',
        biography: input?.biography || '',
        photoUrl: input?.photoUrl || '',
      },
    })

    return updateArtist
  },

  deleteArtist: async (_, { artistID }) => {
    const deleteArtist = await prisma.artist.delete({
      where: {
        id: artistID,
      },
    })
    return deleteArtist ? true : false
  },

  //Album
  addAlbum: async (_, { input }) => {
    const artist = await prisma.artist.findUnique({
      where: {
        name: input?.artistName,
      },
    })
    if (!artist) {
      throw new UserInputError('cannot find artist', {
        argumentName: 'artistName',
      })
    }
    const album = await prisma.album.create({
      data: {
        title: input?.title || '',
        type: input?.type || '',
        artistId: artist?.id,
        albumArt: input?.albumArt || '',
        likeCount: input?.likeCount || 0,
        description: input?.description || '',
        spotify: input?.spotify || '',
        apple: input?.apple || '',
        colors: input?.colors,
      },
    })

    return album
  },

  updateAlbum: async (_, { albumID, input }) => {
    const artist = await prisma.artist.findUnique({
      where: {
        name: input?.artistName,
      },
    })
    if (!artist) {
      throw new UserInputError('cannot find artist', {
        argumentName: 'artistName',
      })
    }

    const updateAlbum = await prisma.album.update({
      where: {
        id: albumID,
      },
      data: {
        title: input?.title || '',
        type: input?.type || '',
        artistId: artist?.id,
        albumArt: input?.albumArt || '',
        likeCount: input?.likeCount || 0,
        description: input?.description || '',
        spotify: input?.spotify || '',
        apple: input?.apple || '',
        colors: input?.colors,
      },
    })
    return updateAlbum
  },

  deleteAlbum: async (_, { albumID }) => {
    const deleteAlbum = await prisma.album.delete({
      where: {
        id: albumID,
      },
    })
    return deleteAlbum ? true : false
  },

  //Social
  addToLike: async (_, { albumID }) => {
    const updateAlbum = await prisma.album.update({
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
    const updateAlbum = await prisma.album.update({
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
}

export default Mutation
