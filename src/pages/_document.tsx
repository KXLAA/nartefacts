/* istanbul ignore file */
import Document, { Head, Html, Main, NextScript } from 'next/document'

import { getCssText } from '@/lib/stitches.config'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>

        <link
          rel="preload"
          href="/fonts/HeliosExt-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/HeliosExt.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
