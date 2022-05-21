/* istanbul ignore file */

import Head from 'next/head'

import { Button } from '@/components/Button'
import * as Layout from '@/components/Common/Layout'
import { Grid } from '@/components/Common/Layout'
import { Spacer } from '@/components/Common/Spacer'
import { Generated } from '@/components/Generated'
import { Title } from '@/components/Title'
import { useCreatedStore } from '@/lib/store'
import { Header } from '@/components/Header'

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
                buttonType="danger"
                height="sm"
                fontSize="md"
                label="Delete"
                onClick={() => store.removeGeneratedColor(item.id)}
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
