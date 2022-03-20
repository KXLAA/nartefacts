import { PrismaClient } from '@prisma/client'
import { ALBUMS, ARTISTS } from '../data'

const prisma = new PrismaClient()

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
