import { PrismaClient } from '@prisma/client'
import { Resolvers } from './generated/graphql'
const prisma = new PrismaClient()

export const resolvers: Resolvers = {
  Query: {
    allAlbums: async () => {
      const albums = prisma.album.findMany()
      return albums
    },

    oneAlbum: async (_, { id }) => {
      const album = prisma.album.findUnique({
        where: {
          id: id,
        },
      })
      return album
    },

    albumsByType: async (_, { type }) => {
      const albums = prisma.album.findMany({
        where: {
          type: type!,
        },
      })
      return albums
    },

    // artistAlbums: async (_, { artist }) => {
    //   const artistInDb = prisma.artist.findUnique({
    //     where: {
    //       name: artist!,
    //     },
    //   })
    // },
  },
}
