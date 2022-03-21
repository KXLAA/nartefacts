import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const resolvers = {
  Query: {
    allAlbums: async () => {
      const albums = prisma.album.findMany()
      return albums
    },

    oneAlbum: async (_: any, { id }: any) => {
      const album = prisma.album.findUnique({
        where: {
          id: id,
        },
      })
      return album
    },

    albumsByType: async (_: any, { type }: any) => {
      const albums = prisma.album.findMany({
        where: {
          type: type,
        },
      })
      return albums
    },

    artistAlbums: async (_: any, { artist }: any) => {
      const artistInDb = prisma.artist.findUnique({
        where: {
          name: artist,
        },
      })
      const albums = artistInDb.Albums
      return albums
    },
  },
}
