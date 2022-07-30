/* istanbul ignore file */

import Head from 'next/head'
import * as React from 'react'
import toast from 'react-hot-toast'

import { Button } from '@/components/button'
import { Generated } from '@/components/generated'
import { Grid } from '@/components/grid'
import { Header } from '@/components/header'
import { Main } from '@/components/layout'
import { Spacer } from '@/components/spacer'
import { Title } from '@/components/title'
import { useAutoAnimate } from '@/lib/hooks'
import { useCreatedStore } from '@/lib/store'

export default function Saved() {
  const store = useCreatedStore()
  const [parent] = useAutoAnimate()
  const getTitle = () =>
    store.generatedColors.length > 0
      ? `📸 You have saved ${store.generatedColors.length} pallette(s)`
      : `🙊 You have not saved any pallette yet`
  const title = getTitle()

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Main size="md">
        <Header secondary />
        <Spacer size="8" />
        <Title text={title} />
        <Spacer size="4" />
        <Grid
          columns={3}
          gap={5}
          ref={parent as React.RefObject<HTMLDivElement>}
        >
          {store.generatedColors.map((item) => (
            <div key={item.id}>
              <Button
                size="xs"
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
