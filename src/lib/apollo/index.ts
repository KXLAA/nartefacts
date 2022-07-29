/* istanbul ignore file */

import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  InMemoryCacheConfig,
  NormalizedCacheObject,
} from '@apollo/client'
import { relayStylePagination } from '@apollo/client/utilities'
import fetch from 'cross-fetch'
import { useMemo } from 'react'

/**
Fixes error with Vercel not finding the graphql endpoint in production
 */
const httpLink = new HttpLink({
  uri:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/api/graphql'
      : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/graphql`,
  fetch: fetch,
  credentials: 'same-origin',
})

/**
This adds support for pagination with Relay Style Pagination
 */

let globalApollo: ApolloClient<NormalizedCacheObject> | null = null

const cacheOptions: InMemoryCacheConfig = {
  typePolicies: {
    Query: {
      fields: {
        allAlbums: relayStylePagination(),
      },
    },
  },
}
/**
Using SSR with Apollo Client is a hassle, this is one way to do it. The recommended way by vercel was too verbose
 */

export const createClient = (initialState?: NormalizedCacheObject) => {
  if (!globalApollo) {
    globalApollo = new ApolloClient({
      ssrMode: process.browser,
      link: httpLink,
      cache: new InMemoryCache(cacheOptions).restore(initialState || {}),
    })
  }
  return globalApollo
}

export const useApolloStore = (initialState?: NormalizedCacheObject) => {
  const store = useMemo(() => createClient(initialState), [initialState])
  return store
}
