import { GraphQLResolveInfo } from 'graphql'
import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>
}
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Album = {
  albumArt: Scalars['String']
  apple?: Maybe<Scalars['String']>
  artist?: Maybe<Artist>
  colors: Array<Scalars['String']>
  description?: Maybe<Scalars['String']>
  id: Scalars['ID']
  likeCount?: Maybe<Scalars['Int']>
  spotify?: Maybe<Scalars['String']>
  title: Scalars['String']
  type: Scalars['String']
}

export type AlbumInput = {
  albumArt: Scalars['String']
  apple?: InputMaybe<Scalars['String']>
  artist?: InputMaybe<ArtistInput>
  colors: Array<Scalars['String']>
  description?: InputMaybe<Scalars['String']>
  likeCount?: InputMaybe<Scalars['Int']>
  spotify?: InputMaybe<Scalars['String']>
  title: Scalars['String']
  type: Scalars['String']
}

export type Artist = {
  albums?: Maybe<Array<Maybe<Album>>>
  biography?: Maybe<Scalars['String']>
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  photoUrl?: Maybe<Scalars['String']>
}

export type ArtistInput = {
  biography?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  photoURL?: InputMaybe<Scalars['String']>
}

export type Colors = {
  colors: Array<Scalars['String']>
}

export type Query = {
  albumsByType: Array<Album>
  allAlbums: Array<Album>
  artistAlbums: Array<Album>
  oneAlbum?: Maybe<Album>
}

export type QueryAlbumsByTypeArgs = {
  type?: InputMaybe<Scalars['String']>
}

export type QueryArtistAlbumsArgs = {
  artist?: InputMaybe<Scalars['String']>
}

export type QueryOneAlbumArgs = {
  id: Scalars['ID']
}

export type AlbumsQueryVariables = Exact<{ [key: string]: never }>

export type AlbumsQuery = {
  allAlbums: Array<{
    id: string
    title: string
    type: string
    albumArt: string
    likeCount?: number | null
    description?: string | null
    spotify?: string | null
    apple?: string | null
    colors: Array<string>
    artist?: {
      id: string
      name?: string | null
      photoUrl?: string | null
      biography?: string | null
      albums?: Array<{ id: string } | null> | null
    } | null
  }>
}

export type AlbumQueryVariables = Exact<{
  id: Scalars['ID']
}>

export type AlbumQuery = {
  oneAlbum?: {
    id: string
    title: string
    type: string
    albumArt: string
    likeCount?: number | null
    description?: string | null
    spotify?: string | null
    apple?: string | null
    colors: Array<string>
    artist?: {
      id: string
      name?: string | null
      photoUrl?: string | null
      biography?: string | null
      albums?: Array<{ id: string } | null> | null
    } | null
  } | null
}

export type AlbumsByTypeQueryVariables = Exact<{
  type?: InputMaybe<Scalars['String']>
}>

export type AlbumsByTypeQuery = {
  albumsByType: Array<{
    id: string
    title: string
    type: string
    albumArt: string
    likeCount?: number | null
    description?: string | null
    spotify?: string | null
    apple?: string | null
    colors: Array<string>
    artist?: {
      id: string
      name?: string | null
      photoUrl?: string | null
      biography?: string | null
      albums?: Array<{ id: string } | null> | null
    } | null
  }>
}

export type AlbumsByArtistQueryVariables = Exact<{
  artist?: InputMaybe<Scalars['String']>
}>

export type AlbumsByArtistQuery = {
  artistAlbums: Array<{
    id: string
    title: string
    type: string
    albumArt: string
    likeCount?: number | null
    description?: string | null
    spotify?: string | null
    apple?: string | null
    colors: Array<string>
    artist?: {
      id: string
      name?: string | null
      photoUrl?: string | null
      biography?: string | null
      albums?: Array<{ id: string } | null> | null
    } | null
  }>
}

export const AlbumsDocument = gql`
  query Albums {
    allAlbums {
      id
      title
      type
      artist {
        id
        name
        photoUrl
        biography
        albums {
          id
        }
      }
      albumArt
      likeCount
      description
      spotify
      apple
      colors
    }
  }
`

/**
 * __useAlbumsQuery__
 *
 * To run a query within a React component, call `useAlbumsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAlbumsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAlbumsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAlbumsQuery(
  baseOptions?: Apollo.QueryHookOptions<AlbumsQuery, AlbumsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AlbumsQuery, AlbumsQueryVariables>(
    AlbumsDocument,
    options,
  )
}
export function useAlbumsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AlbumsQuery, AlbumsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AlbumsQuery, AlbumsQueryVariables>(
    AlbumsDocument,
    options,
  )
}
export type AlbumsQueryHookResult = ReturnType<typeof useAlbumsQuery>
export type AlbumsLazyQueryHookResult = ReturnType<typeof useAlbumsLazyQuery>
export type AlbumsQueryResult = Apollo.QueryResult<
  AlbumsQuery,
  AlbumsQueryVariables
>
export const AlbumDocument = gql`
  query Album($id: ID!) {
    oneAlbum(id: $id) {
      id
      title
      type
      artist {
        id
        name
        photoUrl
        biography
        albums {
          id
        }
      }
      albumArt
      likeCount
      description
      spotify
      apple
      colors
    }
  }
`

/**
 * __useAlbumQuery__
 *
 * To run a query within a React component, call `useAlbumQuery` and pass it any options that fit your needs.
 * When your component renders, `useAlbumQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAlbumQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAlbumQuery(
  baseOptions: Apollo.QueryHookOptions<AlbumQuery, AlbumQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AlbumQuery, AlbumQueryVariables>(
    AlbumDocument,
    options,
  )
}
export function useAlbumLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AlbumQuery, AlbumQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AlbumQuery, AlbumQueryVariables>(
    AlbumDocument,
    options,
  )
}
export type AlbumQueryHookResult = ReturnType<typeof useAlbumQuery>
export type AlbumLazyQueryHookResult = ReturnType<typeof useAlbumLazyQuery>
export type AlbumQueryResult = Apollo.QueryResult<
  AlbumQuery,
  AlbumQueryVariables
>
export const AlbumsByTypeDocument = gql`
  query AlbumsByType($type: String) {
    albumsByType(type: $type) {
      id
      title
      type
      artist {
        id
        name
        photoUrl
        biography
        albums {
          id
        }
      }
      albumArt
      likeCount
      description
      spotify
      apple
      colors
    }
  }
`

/**
 * __useAlbumsByTypeQuery__
 *
 * To run a query within a React component, call `useAlbumsByTypeQuery` and pass it any options that fit your needs.
 * When your component renders, `useAlbumsByTypeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAlbumsByTypeQuery({
 *   variables: {
 *      type: // value for 'type'
 *   },
 * });
 */
export function useAlbumsByTypeQuery(
  baseOptions?: Apollo.QueryHookOptions<
    AlbumsByTypeQuery,
    AlbumsByTypeQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AlbumsByTypeQuery, AlbumsByTypeQueryVariables>(
    AlbumsByTypeDocument,
    options,
  )
}
export function useAlbumsByTypeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AlbumsByTypeQuery,
    AlbumsByTypeQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AlbumsByTypeQuery, AlbumsByTypeQueryVariables>(
    AlbumsByTypeDocument,
    options,
  )
}
export type AlbumsByTypeQueryHookResult = ReturnType<
  typeof useAlbumsByTypeQuery
>
export type AlbumsByTypeLazyQueryHookResult = ReturnType<
  typeof useAlbumsByTypeLazyQuery
>
export type AlbumsByTypeQueryResult = Apollo.QueryResult<
  AlbumsByTypeQuery,
  AlbumsByTypeQueryVariables
>
export const AlbumsByArtistDocument = gql`
  query AlbumsByArtist($artist: String) {
    artistAlbums(artist: $artist) {
      id
      title
      type
      artist {
        id
        name
        photoUrl
        biography
        albums {
          id
        }
      }
      albumArt
      likeCount
      description
      spotify
      apple
      colors
    }
  }
`

/**
 * __useAlbumsByArtistQuery__
 *
 * To run a query within a React component, call `useAlbumsByArtistQuery` and pass it any options that fit your needs.
 * When your component renders, `useAlbumsByArtistQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAlbumsByArtistQuery({
 *   variables: {
 *      artist: // value for 'artist'
 *   },
 * });
 */
export function useAlbumsByArtistQuery(
  baseOptions?: Apollo.QueryHookOptions<
    AlbumsByArtistQuery,
    AlbumsByArtistQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AlbumsByArtistQuery, AlbumsByArtistQueryVariables>(
    AlbumsByArtistDocument,
    options,
  )
}
export function useAlbumsByArtistLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AlbumsByArtistQuery,
    AlbumsByArtistQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AlbumsByArtistQuery, AlbumsByArtistQueryVariables>(
    AlbumsByArtistDocument,
    options,
  )
}
export type AlbumsByArtistQueryHookResult = ReturnType<
  typeof useAlbumsByArtistQuery
>
export type AlbumsByArtistLazyQueryHookResult = ReturnType<
  typeof useAlbumsByArtistLazyQuery
>
export type AlbumsByArtistQueryResult = Apollo.QueryResult<
  AlbumsByArtistQuery,
  AlbumsByArtistQueryVariables
>

export type ResolverTypeWrapper<T> = Promise<T> | T

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Album: ResolverTypeWrapper<Album>
  AlbumInput: AlbumInput
  Artist: ResolverTypeWrapper<Artist>
  ArtistInput: ArtistInput
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>
  Colors: ResolverTypeWrapper<Colors>
  ID: ResolverTypeWrapper<Scalars['ID']>
  Int: ResolverTypeWrapper<Scalars['Int']>
  Query: ResolverTypeWrapper<{}>
  String: ResolverTypeWrapper<Scalars['String']>
}

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Album: Album
  AlbumInput: AlbumInput
  Artist: Artist
  ArtistInput: ArtistInput
  Boolean: Scalars['Boolean']
  Colors: Colors
  ID: Scalars['ID']
  Int: Scalars['Int']
  Query: {}
  String: Scalars['String']
}

export type AlbumResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Album'] = ResolversParentTypes['Album'],
> = {
  albumArt?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  apple?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  artist?: Resolver<Maybe<ResolversTypes['Artist']>, ParentType, ContextType>
  colors?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>
  description?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  likeCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  spotify?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ArtistResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Artist'] = ResolversParentTypes['Artist'],
> = {
  albums?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Album']>>>,
    ParentType,
    ContextType
  >
  biography?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  photoUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ColorsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Colors'] = ResolversParentTypes['Colors'],
> = {
  colors?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = {
  albumsByType?: Resolver<
    Array<ResolversTypes['Album']>,
    ParentType,
    ContextType,
    Partial<QueryAlbumsByTypeArgs>
  >
  allAlbums?: Resolver<Array<ResolversTypes['Album']>, ParentType, ContextType>
  artistAlbums?: Resolver<
    Array<ResolversTypes['Album']>,
    ParentType,
    ContextType,
    Partial<QueryArtistAlbumsArgs>
  >
  oneAlbum?: Resolver<
    Maybe<ResolversTypes['Album']>,
    ParentType,
    ContextType,
    RequireFields<QueryOneAlbumArgs, 'id'>
  >
}

export type Resolvers<ContextType = any> = {
  Album?: AlbumResolvers<ContextType>
  Artist?: ArtistResolvers<ContextType>
  Colors?: ColorsResolvers<ContextType>
  Query?: QueryResolvers<ContextType>
}
