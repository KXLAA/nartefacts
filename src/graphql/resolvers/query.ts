import { PrismaClient } from '@prisma/client'

import { QueryResolvers } from '@/graphql/generated/graphql'
import { paginate } from '@/graphql/resolvers/utils'

const prisma = new PrismaClient()

const Query: QueryResolvers = {
  allAlbums: async (_, { first, after }) => {
    //Get all the album data from the database
    const albums = await prisma.album.findMany({
      include: {
        artist: true,
      },
    })

    const paginated = paginate(first!, after!, albums)

    return paginated
  },

  oneAlbum: async (_, { id }) => {
    const album = await prisma.album.findUnique({
      where: {
        id: id,
      },
      include: {
        artist: true,
      },
    })
    return album
  },

  albumsByType: async (_, { first, after, type }) => {
    const albums = await prisma.album.findMany({
      where: {
        type: type!,
      },
    })

    const paginated = paginate(first!, after!, albums)

    return paginated
  },

  albumsByTitle: async (_, { first, after, title }) => {
    const albums = await prisma.album.findMany({
      where: {
        title: title!,
      },
    })

    const paginated = paginate(first!, after!, albums)

    return paginated
  },

  albumsByArtist: async (_, { first, after, artist }) => {
    const albums = await prisma.album.findMany({
      where: {
        artist: {
          name: artist!,
        },
      },
    })
    const paginated = paginate(first!, after!, albums)

    return paginated
  },

  analytics: async () => {
    const analytics = await prisma.analytics.findMany()
    return analytics
  },
}

export default Query
