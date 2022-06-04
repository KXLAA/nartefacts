import { albums } from '@prisma/client'

//Helper function to covert rgb color codes to HEX color codes
export const rgbToHex = (arr: [number, number, number]): string => {
  return '#' + arr.map((v) => ('0' + v.toString()).slice(-2)).join('')
}

//Helper function to paginate queries
export const paginate = (
  firstArg: number,
  afterArg: string,
  dataToPaginate: albums[] | [],
) => {
  //Slicing is done with the first argument. This asks for the query to return the first 10 items from the dataToPaginate array.
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
    edges: paginatedData.map((data) => ({
      cursor: data.id,
      node: data,
    })),
    node: paginatedData,
    pageInfo: {
      endCursor: lastPaginatedData.id,
      hasNextPage: offset + first < dataToPaginate.length,
    },
  }
}
