import { ALBUMS, ARTISTS } from '../data'
import { prisma } from '../lib/prisma'

const main = async () => {
  await prisma.artist.createMany({
    data: ARTISTS,
  })
  await prisma.album.createMany({
    data: ALBUMS,
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
