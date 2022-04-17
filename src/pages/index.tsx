import { Header } from 'components/Header'
import { Card } from 'components/Card'
import * as Layout from 'components/common/Layout'
import { useAllAlbumsQuery } from '../../graphql/generated/graphql'
import { prisma } from '../../lib/prisma'

export default function Home() {
  const { data, loading, error } = useAllAlbumsQuery()
  const albums = data?.allAlbums?.node
  console.log(albums)

  return (
    <Layout.Main>
      <Header />

      <Layout.Cards>
        {albums?.map((album) => (
          <Card
            key={album?.id}
            colors={album?.colors}
            likeCount={album?.likeCount}
            albumArt={album?.albumArt}
            spotify={album?.spotify}
            apple={album?.apple}
            type={album?.type}
            description={album?.description}
            title={album?.title}
            artist={album?.artist}
          />
        ))}
      </Layout.Cards>
    </Layout.Main>
  )
}

// export const getServerSideProps = async () => {
//   const albums = await prisma.album.findMany({
//     include: {
//       artist: true,
//     },
//   })

//   return {
//     props: {
//       albums,
//     },
//   }
// }
