import { PrismaClient } from '@prisma/client'
import { QueryResolvers } from '../generated/graphql'
const prisma = new PrismaClient()

const Query: QueryResolvers = {
  allAlbums: async () => {
    const albums = prisma.album.findMany({
      include: {
        artist: true,
      },
    })
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
  //   return artistInDb
  // },
}

export default Query
