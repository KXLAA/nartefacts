/* istanbul ignore file */

import Head from 'next/head'
import toast from 'react-hot-toast'

import { Button } from '@/components/Button'
import * as Layout from '@/components/Common/Layout'
import { Grid } from '@/components/Common/Layout'
import { Spacer } from '@/components/Common/Spacer'
import { Generated } from '@/components/Generated'
import { Header } from '@/components/Header'
import { Title } from '@/components/Title'
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
      <Layout.Main size="md">
        <Header secondary />
        <Title text={getText()} />
        <Spacer size="lg" />
        <Grid columns={3}>
          {store.generatedColors.map((item) => (
            <div key={item.id}>
              <Button
                size="sm"
                fullWidth
                variant="danger"
                label="Delete"
                onClick={() => {
                  store.removeGeneratedColor(item.id)
                  toast(`Deleted Palette`)
                }}
              />
              <Spacer size="sm" />
              <Generated small {...item} />
            </div>
          ))}
        </Grid>
      </Layout.Main>
    </>
  )
}
