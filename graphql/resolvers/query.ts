import { PrismaClient } from '@prisma/client'
import { QueryResolvers } from '../generated/graphql'
const prisma = new PrismaClient()
import { Album } from '@prisma/client'

const paginate = (
  firstArg: number,
  afterArg: string,
  dataToPaginate: Album[] | [],
) => {
  //Slicing is done with the first argument. This asks for the query to return the first 10 items from the dataToPaginate .
  const first = firstArg || 10
  //Pagination is done with the after argument. We passed in a cursor
  //so we are asking for the server to return the data after that cursor.
  const after = afterArg || 0

  //Here we find the index of data in the data array
  //that matches with the after argument provided by the client.
  //That is the cursor
  const index = dataToPaginate.findIndex(
    (item: { id: string }) => item.id === after,
  )

  //Then we increase that index by one indicating that we want to fetch from the next item in the array
  const offset: number = index + 1

  //Here we are returning an array that contains the next batch of data we want to fetch.
  const paginatedData = dataToPaginate.slice(offset, offset + first)

  //Here we find the last item in the array of the new albums array.
  //This would serve an an end cursor. Would help us fetch the next 10 items
  const lastPaginatedData = paginatedData[paginatedData.length - 1]

  return {
    edges: paginatedData,
    endCursor: lastPaginatedData.id,
    hasNextPage: offset + first < dataToPaginate.length,
  }
}

const Query: QueryResolvers = {
  allAlbums: async (_, args) => {
    //Get all the album data from the database
    const albums = await prisma.album.findMany({
      include: {
        artist: true,
      },
    })

    const { edges, endCursor, hasNextPage } = paginate(
      args.first!,
      args.after!,
      albums,
    )

    return {
      edges: edges.map((album) => ({
        cursor: album.id,
        node: album,
      })),
      pageInfo: {
        endCursor: endCursor,
        hasNextPage: hasNextPage,
      },
    }
  },

  oneAlbum: async (_, args) => {
    const album = prisma.album.findUnique({
      where: {
        id: args.id,
      },
    })
    return album
  },

  albumsByType: async (_, args) => {
    const albums = await prisma.album.findMany({
      where: {
        type: args.type!,
      },
    })

    const { edges, endCursor, hasNextPage } = paginate(
      args.first!,
      args.after!,
      albums,
    )

    return {
      edges: edges.map((album) => ({
        cursor: album.id,
        node: album,
      })),
      pageInfo: {
        endCursor: endCursor,
        hasNextPage: hasNextPage,
      },
    }
  },

  albumsByTitle: async (_, args) => {
    const albums = await prisma.album.findMany({
      where: {
        title: args.title!,
      },
    })

    const { edges, endCursor, hasNextPage } = paginate(
      args.first!,
      args.after!,
      albums,
    )

    return {
      edges: edges.map((album) => ({
        cursor: album.id,
        node: album,
      })),
      pageInfo: {
        endCursor: endCursor,
        hasNextPage: hasNextPage,
      },
    }
  },

  albumsByArtist: async (_, args) => {
    const albums = await prisma.album.findMany({
      where: {
        artist: {
          name: args.artist!,
        },
      },
    })
    const { edges, endCursor, hasNextPage } = paginate(
      args.first!,
      args.after!,
      albums,
    )

    return {
      edges: edges.map((album) => ({
        cursor: album.id,
        node: album,
      })),
      pageInfo: {
        endCursor: endCursor,
        hasNextPage: hasNextPage,
      },
    }
  },
}

export default Query
