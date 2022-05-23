/* istanbul ignore file */
import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from 'styled-components'

import { useApollo } from '@/lib/apollo'
import { GlobalStyles, theme } from '@/styles/global'

function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps)

  return (
    <>
      <Head>
        <title>nartefacts</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="img/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="img/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="img/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="mask-icon"
          href="img/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#ffffff" />
        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://www.nartefacts.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="nartefacts" />
        <meta
          property="og:description"
          content="Shaders inspired by African music."
        />
        <meta
          property="og:image"
          content="https://ucarecdn.com/85a59495-37d7-4fd0-b128-482cdbf43445/OGIMAGE.png"
        />
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="https://www.nartefacts.com/" />
        <meta property="twitter:url" content="https://www.nartefacts.com/" />
        <meta name="twitter:title" content="nartefacts" />
        <meta
          name="twitter:description"
          content="Shaders inspired by African music."
        />
        <meta
          name="twitter:image"
          content="https://ucarecdn.com/85a59495-37d7-4fd0-b128-482cdbf43445/OGIMAGE.png"
        />
      </Head>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
          <Toaster
            position="top-right"
            reverseOrder={true}
            toastOptions={{
              style: {
                padding: '0rem',
                background: 'none',
                width: '15rem',
              },
            }}
          />
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    </>
  )
}

export default App
