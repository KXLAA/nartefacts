/* istanbul ignore file */

import Head from 'next/head'
import toast from 'react-hot-toast'

import { Button } from '@/components/button'
import { Generated } from '@/components/generated'
import { Grid } from '@/components/grid'
import { Header } from '@/components/header'
import { Main } from '@/components/layout'
import { Spacer } from '@/components/spacer'
import { Title } from '@/components/title'
import { useCreatedStore } from '@/lib/store'

export default function Saved() {
  const store = useCreatedStore()

  const getText = (): string => {
    return store.generatedColors.length > 0
      ? `📸 You have saved ${store.generatedColors.length} pallette(s)`
      : `🙊 You have not saved any pallette yet`
  }

  return (
    <>
      <Head>
        <title>{getText()}</title>
      </Head>
      <Main size="md">
        <Header secondary />
        <Spacer size="8" />
        <Title text={getText()} />
        <Spacer size="4" />
        <Grid columns={3} gap={5}>
          {store.generatedColors.map((item) => (
            <div key={item.id}>
              <Button
                size="sm"
                variant="danger"
                label="Delete"
                onClick={() => {
                  store.removeGeneratedColor(item.id)
                  toast(`Deleted Palette`)
                }}
              />
              <Spacer size="2" />

              <Generated small {...item} />
            </div>
          ))}
        </Grid>
      </Main>
    </>
  )
}
