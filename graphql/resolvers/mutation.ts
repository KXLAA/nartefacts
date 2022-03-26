import { PrismaClient } from '@prisma/client'
import { MutationResolvers } from '../generated/graphql'
import ColorThief from 'colorthief'
import { ApolloError } from 'apollo-server-errors'
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

  deleteArtist: async (_, { artistID }) => {
    const deleteArtist = await prisma.artist.delete({
      where: {
        id: artistID,
      },
    })
    return deleteArtist ? true : false
  },
}

export default Mutation
