/* istanbul ignore file */
import { getDataFromTree } from '@apollo/client/react/ssr'
import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { getApolloClient } from '../../lib/apollo'

export default class MyDocument extends Document {
  constructor(props: any) {
    super(props)
    /**
     * Attach apolloState to the "global" __NEXT_DATA__ so we can populate the ApolloClient cache
     */
    const { __NEXT_DATA__, apolloState } = props
    __NEXT_DATA__.apolloState = apolloState
  }

  static async getInitialProps(ctx: DocumentContext) {
    /**
     * Initialize and get a reference to ApolloClient, which is saved in a "global" variable.
     * The same client instance is returned to any other call to `getApolloClient`, so _app.js gets the same authenticated client to give to ApolloProvider.
     */
    const apolloClient = getApolloClient(true)
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      /**
       * Render the page through Apollo's `getDataFromTree` so the cache is populated.
       * Unfortunately this renders the page twice per request... There may be a way around doing this, but I haven't quite ironed that out yet.
       */
      await getDataFromTree(<ctx.AppTree {...ctx.appProps} />)

      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      /**
       * Render the page as normal, but now that ApolloClient is initialized and the cache is full, each query will actually work.
       */
      const initialProps = await Document.getInitialProps(ctx)

      /**
       * Extract the cache to pass along to the client so the queries are "hydrated" and don't need to actually request the data again!
       */
      const apolloState = apolloClient.extract()
      return {
        ...initialProps,
        apolloState,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
