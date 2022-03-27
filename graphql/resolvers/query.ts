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

  albumsByTitle: async (_, { title }) => {
    const albums = prisma.album.findMany({
      where: {
        title: title!,
      },
    })
    return albums
  },

  albumsByArtist: async (_, { artist }) => {
    const albums = prisma.album.findMany({
      where: {
        artist: {
          name: artist!,
        },
      },
    })

    return albums
  },
}

export default Query
