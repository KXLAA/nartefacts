import { PrismaClient } from '@prisma/client'
import { MutationResolvers } from '../generated/graphql'
import ColorThief from 'colorthief'
import { ApolloError, UserInputError } from 'apollo-server-errors'
const prisma = new PrismaClient()

const Mutation: MutationResolvers = {
  generateColors: async (_, { imageUrl }) => {
    //Helper function to covert rgb color codes to HEX color codes
    const rgbToHex = (arr: number[]) => {
      return '#' + arr.map((v) => ('0' + v.toString()).slice(-2)).join('')
    }
    //Function to get a set of 8 colors from an image url
    const getColors = async () => {
      try {
        //This function returns an array of rgb color codes in this format - [[123, 23,33],[123, 23,33]]
        const colors: number[][] = await ColorThief.getPalette(imageUrl!, 8)
        //Converting the rgb color codes to HEX color codes
        const palette: string[] = colors.map((array) => rgbToHex(array))
        return palette
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
        biography: input?.biography,
        photoUrl: input?.photoUrl,
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
        biography: input?.biography,
        photoUrl: input?.photoUrl,
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
}

export default Mutation
