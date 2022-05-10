import { ALBUMS, ARTISTS } from '../data'
import { prisma } from '../lib/prisma'

const main = async () => {
  await prisma.artist.createMany({
    data: ARTISTS,
  })
  await prisma.album.createMany({
    data: ALBUMS,
  })
  await prisma.analytics.create({
    data: {
      id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
      generatedPalettes: 0,
    },
  })
}

// const analytics = async () => {
//   await prisma.analytics.create({
//     data: {
//       id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
//       generatedPalettes: 0,
//     },
//   })
// }

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
