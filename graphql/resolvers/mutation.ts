// import { PrismaClient } from '@prisma/client'
import { MutationResolvers } from '../generated/graphql'
import ColorThief from 'colorthief'
// const prisma = new PrismaClient()

const Mutation: MutationResolvers = {
  generateColors: async (_, { imageUrl }) => {
    const hslToHex = (arr: number[]) => {
      return '#' + arr.map((v) => ('0' + v.toString()).slice(-2)).join('')
    }

    const getColors = async () => {
      try {
        const colors: number[][] = await ColorThief.getPalette(imageUrl!, 8)
        const palette: string[] = colors.map((array) => hslToHex(array))
        return palette
      } catch (error: unknown) {
        if (error as Error) console.log(error)
      }
    }
    const colors = await getColors()
    return colors!
  },
}

export default Mutation
