import { GraphQLResolveInfo } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Admin = {
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type Album = {
  albumArt: Scalars['String'];
  apple?: Maybe<Scalars['String']>;
  artist?: Maybe<Artist>;
  colors: Array<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  likeCount?: Maybe<Scalars['Int']>;
  spotify?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  type: Scalars['String'];
};

export type AlbumInput = {
  albumArt: Scalars['String'];
  apple?: InputMaybe<Scalars['String']>;
  artistName: Scalars['String'];
  colors: Array<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  likeCount?: InputMaybe<Scalars['Int']>;
  spotify?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  type: Scalars['String'];
};

export type Artist = {
  albums?: Maybe<Array<Maybe<Album>>>;
  biography?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  photoUrl?: Maybe<Scalars['String']>;
};

export type ArtistInput = {
  biography?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  photoUrl?: InputMaybe<Scalars['String']>;
};

export type Colors = {
  colors: Array<Scalars['String']>;
};

export type Mutation = {
  addAlbum: Album;
  addArtist?: Maybe<Artist>;
  addToLike: Album;
  deleteAlbum: Scalars['Boolean'];
  deleteArtist: Scalars['Boolean'];
  generateColors?: Maybe<Colors>;
  logIn: Scalars['String'];
  removeFromLike: Album;
  signUp: Scalars['String'];
  updateAlbum: Album;
  updateArtist?: Maybe<Artist>;
};


export type MutationAddAlbumArgs = {
  input?: InputMaybe<AlbumInput>;
};


export type MutationAddArtistArgs = {
  input?: InputMaybe<ArtistInput>;
};


export type MutationAddToLikeArgs = {
  albumID: Scalars['ID'];
};


export type MutationDeleteAlbumArgs = {
  albumID: Scalars['ID'];
};


export type MutationDeleteArtistArgs = {
  artistID: Scalars['ID'];
};


export type MutationGenerateColorsArgs = {
  imageUrl?: InputMaybe<Scalars['String']>;
};


export type MutationLogInArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationRemoveFromLikeArgs = {
  albumID: Scalars['ID'];
};


export type MutationSignUpArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationUpdateAlbumArgs = {
  albumID: Scalars['ID'];
  input?: InputMaybe<AlbumInput>;
};


export type MutationUpdateArtistArgs = {
  artistID: Scalars['ID'];
  input?: InputMaybe<ArtistInput>;
};

export type Query = {
  albumsByArtist?: Maybe<Array<Maybe<Album>>>;
  albumsByTitle?: Maybe<Array<Maybe<Album>>>;
  albumsByType?: Maybe<Array<Maybe<Album>>>;
  allAlbums: Array<Album>;
  oneAlbum?: Maybe<Album>;
};


export type QueryAlbumsByArtistArgs = {
  artist?: InputMaybe<Scalars['String']>;
};


export type QueryAlbumsByTitleArgs = {
  title?: InputMaybe<Scalars['String']>;
};


export type QueryAlbumsByTypeArgs = {
  type?: InputMaybe<Scalars['String']>;
};


export type QueryOneAlbumArgs = {
  id: Scalars['ID'];
};

export type AlbumsQueryVariables = Exact<{ [key: string]: never; }>;


export type AlbumsQuery = { allAlbums: Array<{ id: string, title: string, type: string, albumArt: string, likeCount?: number | null, description?: string | null, spotify?: string | null, apple?: string | null, colors: Array<string>, artist?: { id: string, name?: string | null, photoUrl?: string | null, biography?: string | null, albums?: Array<{ id: string } | null> | null } | null }> };

export type AlbumQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type AlbumQuery = { oneAlbum?: { id: string, title: string, type: string, albumArt: string, likeCount?: number | null, description?: string | null, spotify?: string | null, apple?: string | null, colors: Array<string>, artist?: { id: string, name?: string | null, photoUrl?: string | null, biography?: string | null, albums?: Array<{ id: string } | null> | null } | null } | null };

export type AlbumsByTypeQueryVariables = Exact<{
  type?: InputMaybe<Scalars['String']>;
}>;


export type AlbumsByTypeQuery = { albumsByType?: Array<{ id: string, title: string, type: string, albumArt: string, likeCount?: number | null, description?: string | null, spotify?: string | null, apple?: string | null, colors: Array<string>, artist?: { id: string, name?: string | null, photoUrl?: string | null, biography?: string | null, albums?: Array<{ id: string } | null> | null } | null } | null> | null };

export type AlbumsByTitleQueryVariables = Exact<{
  title?: InputMaybe<Scalars['String']>;
}>;


export type AlbumsByTitleQuery = { albumsByTitle?: Array<{ id: string, title: string, type: string, albumArt: string, likeCount?: number | null, description?: string | null, spotify?: string | null, apple?: string | null, colors: Array<string>, artist?: { id: string, name?: string | null, photoUrl?: string | null, biography?: string | null, albums?: Array<{ id: string } | null> | null } | null } | null> | null };

export type AlbumsByArtistQueryVariables = Exact<{
  artist?: InputMaybe<Scalars['String']>;
}>;


export type AlbumsByArtistQuery = { albumsByArtist?: Array<{ id: string, title: string, type: string, albumArt: string, likeCount?: number | null, description?: string | null, spotify?: string | null, apple?: string | null, colors: Array<string>, artist?: { id: string, name?: string | null, photoUrl?: string | null, biography?: string | null, albums?: Array<{ id: string } | null> | null } | null } | null> | null };

export type GenerateColorsMutationVariables = Exact<{
  imageUrl?: InputMaybe<Scalars['String']>;
}>;


export type GenerateColorsMutation = { generateColors?: { colors: Array<string> } | null };

export type AddToLikeMutationVariables = Exact<{
  albumId: Scalars['ID'];
}>;


export type AddToLikeMutation = { addToLike: { id: string, title: string, type: string, albumArt: string, likeCount?: number | null, description?: string | null, spotify?: string | null, apple?: string | null, colors: Array<string>, artist?: { id: string } | null } };

export type RemoveFromLikeMutationVariables = Exact<{
  albumId: Scalars['ID'];
}>;


export type RemoveFromLikeMutation = { removeFromLike: { id: string, title: string, type: string, albumArt: string, likeCount?: number | null, description?: string | null, spotify?: string | null, apple?: string | null, colors: Array<string>, artist?: { id: string } | null } };

export type AddAlbumMutationVariables = Exact<{
  input?: InputMaybe<AlbumInput>;
}>;


export type AddAlbumMutation = { addAlbum: { id: string, title: string, type: string, albumArt: string, likeCount?: number | null, description?: string | null, spotify?: string | null, apple?: string | null, colors: Array<string>, artist?: { id: string } | null } };

export type UpdateAlbumMutationVariables = Exact<{
  albumId: Scalars['ID'];
  input?: InputMaybe<AlbumInput>;
}>;


export type UpdateAlbumMutation = { updateAlbum: { id: string, title: string, type: string, albumArt: string, likeCount?: number | null, description?: string | null, spotify?: string | null, apple?: string | null, colors: Array<string>, artist?: { id: string } | null } };

export type DeleteAlbumMutationVariables = Exact<{
  albumId: Scalars['ID'];
}>;


export type DeleteAlbumMutation = { deleteAlbum: boolean };

export type AddArtistMutationVariables = Exact<{
  input?: InputMaybe<ArtistInput>;
}>;


export type AddArtistMutation = { addArtist?: { id: string, name?: string | null, photoUrl?: string | null, biography?: string | null, albums?: Array<{ id: string } | null> | null } | null };

export type UpdateArtistMutationVariables = Exact<{
  artistId: Scalars['ID'];
  input?: InputMaybe<ArtistInput>;
}>;


export type UpdateArtistMutation = { updateArtist?: { id: string, name?: string | null, photoUrl?: string | null, biography?: string | null, albums?: Array<{ id: string } | null> | null } | null };

export type DeleteArtistMutationVariables = Exact<{
  artistId: Scalars['ID'];
}>;


export type DeleteArtistMutation = { deleteArtist: boolean };

export type LogInMutationVariables = Exact<{
  password: Scalars['String'];
  username: Scalars['String'];
}>;


export type LogInMutation = { logIn: string };


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
    `;

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
export function useAlbumsQuery(baseOptions?: Apollo.QueryHookOptions<AlbumsQuery, AlbumsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AlbumsQuery, AlbumsQueryVariables>(AlbumsDocument, options);
      }
export function useAlbumsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AlbumsQuery, AlbumsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AlbumsQuery, AlbumsQueryVariables>(AlbumsDocument, options);
        }
export type AlbumsQueryHookResult = ReturnType<typeof useAlbumsQuery>;
export type AlbumsLazyQueryHookResult = ReturnType<typeof useAlbumsLazyQuery>;
export type AlbumsQueryResult = Apollo.QueryResult<AlbumsQuery, AlbumsQueryVariables>;
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
    `;

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
export function useAlbumQuery(baseOptions: Apollo.QueryHookOptions<AlbumQuery, AlbumQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AlbumQuery, AlbumQueryVariables>(AlbumDocument, options);
      }
export function useAlbumLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AlbumQuery, AlbumQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AlbumQuery, AlbumQueryVariables>(AlbumDocument, options);
        }
export type AlbumQueryHookResult = ReturnType<typeof useAlbumQuery>;
export type AlbumLazyQueryHookResult = ReturnType<typeof useAlbumLazyQuery>;
export type AlbumQueryResult = Apollo.QueryResult<AlbumQuery, AlbumQueryVariables>;
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
    `;

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
export function useAlbumsByTypeQuery(baseOptions?: Apollo.QueryHookOptions<AlbumsByTypeQuery, AlbumsByTypeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AlbumsByTypeQuery, AlbumsByTypeQueryVariables>(AlbumsByTypeDocument, options);
      }
export function useAlbumsByTypeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AlbumsByTypeQuery, AlbumsByTypeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AlbumsByTypeQuery, AlbumsByTypeQueryVariables>(AlbumsByTypeDocument, options);
        }
export type AlbumsByTypeQueryHookResult = ReturnType<typeof useAlbumsByTypeQuery>;
export type AlbumsByTypeLazyQueryHookResult = ReturnType<typeof useAlbumsByTypeLazyQuery>;
export type AlbumsByTypeQueryResult = Apollo.QueryResult<AlbumsByTypeQuery, AlbumsByTypeQueryVariables>;
export const AlbumsByTitleDocument = gql`
    query AlbumsByTitle($title: String) {
  albumsByTitle(title: $title) {
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
    `;

/**
 * __useAlbumsByTitleQuery__
 *
 * To run a query within a React component, call `useAlbumsByTitleQuery` and pass it any options that fit your needs.
 * When your component renders, `useAlbumsByTitleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAlbumsByTitleQuery({
 *   variables: {
 *      title: // value for 'title'
 *   },
 * });
 */
export function useAlbumsByTitleQuery(baseOptions?: Apollo.QueryHookOptions<AlbumsByTitleQuery, AlbumsByTitleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AlbumsByTitleQuery, AlbumsByTitleQueryVariables>(AlbumsByTitleDocument, options);
      }
export function useAlbumsByTitleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AlbumsByTitleQuery, AlbumsByTitleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AlbumsByTitleQuery, AlbumsByTitleQueryVariables>(AlbumsByTitleDocument, options);
        }
export type AlbumsByTitleQueryHookResult = ReturnType<typeof useAlbumsByTitleQuery>;
export type AlbumsByTitleLazyQueryHookResult = ReturnType<typeof useAlbumsByTitleLazyQuery>;
export type AlbumsByTitleQueryResult = Apollo.QueryResult<AlbumsByTitleQuery, AlbumsByTitleQueryVariables>;
export const AlbumsByArtistDocument = gql`
    query AlbumsByArtist($artist: String) {
  albumsByArtist(artist: $artist) {
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
    `;

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
export function useAlbumsByArtistQuery(baseOptions?: Apollo.QueryHookOptions<AlbumsByArtistQuery, AlbumsByArtistQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AlbumsByArtistQuery, AlbumsByArtistQueryVariables>(AlbumsByArtistDocument, options);
      }
export function useAlbumsByArtistLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AlbumsByArtistQuery, AlbumsByArtistQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AlbumsByArtistQuery, AlbumsByArtistQueryVariables>(AlbumsByArtistDocument, options);
        }
export type AlbumsByArtistQueryHookResult = ReturnType<typeof useAlbumsByArtistQuery>;
export type AlbumsByArtistLazyQueryHookResult = ReturnType<typeof useAlbumsByArtistLazyQuery>;
export type AlbumsByArtistQueryResult = Apollo.QueryResult<AlbumsByArtistQuery, AlbumsByArtistQueryVariables>;
export const GenerateColorsDocument = gql`
    mutation GenerateColors($imageUrl: String) {
  generateColors(imageUrl: $imageUrl) {
    colors
  }
}
    `;
export type GenerateColorsMutationFn = Apollo.MutationFunction<GenerateColorsMutation, GenerateColorsMutationVariables>;

/**
 * __useGenerateColorsMutation__
 *
 * To run a mutation, you first call `useGenerateColorsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGenerateColorsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [generateColorsMutation, { data, loading, error }] = useGenerateColorsMutation({
 *   variables: {
 *      imageUrl: // value for 'imageUrl'
 *   },
 * });
 */
export function useGenerateColorsMutation(baseOptions?: Apollo.MutationHookOptions<GenerateColorsMutation, GenerateColorsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GenerateColorsMutation, GenerateColorsMutationVariables>(GenerateColorsDocument, options);
      }
export type GenerateColorsMutationHookResult = ReturnType<typeof useGenerateColorsMutation>;
export type GenerateColorsMutationResult = Apollo.MutationResult<GenerateColorsMutation>;
export type GenerateColorsMutationOptions = Apollo.BaseMutationOptions<GenerateColorsMutation, GenerateColorsMutationVariables>;
export const AddToLikeDocument = gql`
    mutation AddToLike($albumId: ID!) {
  addToLike(albumID: $albumId) {
    id
    title
    type
    artist {
      id
    }
    albumArt
    likeCount
    description
    spotify
    apple
    colors
  }
}
    `;
export type AddToLikeMutationFn = Apollo.MutationFunction<AddToLikeMutation, AddToLikeMutationVariables>;

/**
 * __useAddToLikeMutation__
 *
 * To run a mutation, you first call `useAddToLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddToLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addToLikeMutation, { data, loading, error }] = useAddToLikeMutation({
 *   variables: {
 *      albumId: // value for 'albumId'
 *   },
 * });
 */
export function useAddToLikeMutation(baseOptions?: Apollo.MutationHookOptions<AddToLikeMutation, AddToLikeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddToLikeMutation, AddToLikeMutationVariables>(AddToLikeDocument, options);
      }
export type AddToLikeMutationHookResult = ReturnType<typeof useAddToLikeMutation>;
export type AddToLikeMutationResult = Apollo.MutationResult<AddToLikeMutation>;
export type AddToLikeMutationOptions = Apollo.BaseMutationOptions<AddToLikeMutation, AddToLikeMutationVariables>;
export const RemoveFromLikeDocument = gql`
    mutation RemoveFromLike($albumId: ID!) {
  removeFromLike(albumID: $albumId) {
    id
    title
    type
    artist {
      id
    }
    albumArt
    likeCount
    description
    spotify
    apple
    colors
  }
}
    `;
export type RemoveFromLikeMutationFn = Apollo.MutationFunction<RemoveFromLikeMutation, RemoveFromLikeMutationVariables>;

/**
 * __useRemoveFromLikeMutation__
 *
 * To run a mutation, you first call `useRemoveFromLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveFromLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeFromLikeMutation, { data, loading, error }] = useRemoveFromLikeMutation({
 *   variables: {
 *      albumId: // value for 'albumId'
 *   },
 * });
 */
export function useRemoveFromLikeMutation(baseOptions?: Apollo.MutationHookOptions<RemoveFromLikeMutation, RemoveFromLikeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveFromLikeMutation, RemoveFromLikeMutationVariables>(RemoveFromLikeDocument, options);
      }
export type RemoveFromLikeMutationHookResult = ReturnType<typeof useRemoveFromLikeMutation>;
export type RemoveFromLikeMutationResult = Apollo.MutationResult<RemoveFromLikeMutation>;
export type RemoveFromLikeMutationOptions = Apollo.BaseMutationOptions<RemoveFromLikeMutation, RemoveFromLikeMutationVariables>;
export const AddAlbumDocument = gql`
    mutation AddAlbum($input: AlbumInput) {
  addAlbum(input: $input) {
    id
    title
    type
    artist {
      id
    }
    albumArt
    likeCount
    description
    spotify
    apple
    colors
  }
}
    `;
export type AddAlbumMutationFn = Apollo.MutationFunction<AddAlbumMutation, AddAlbumMutationVariables>;

/**
 * __useAddAlbumMutation__
 *
 * To run a mutation, you first call `useAddAlbumMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddAlbumMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addAlbumMutation, { data, loading, error }] = useAddAlbumMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddAlbumMutation(baseOptions?: Apollo.MutationHookOptions<AddAlbumMutation, AddAlbumMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddAlbumMutation, AddAlbumMutationVariables>(AddAlbumDocument, options);
      }
export type AddAlbumMutationHookResult = ReturnType<typeof useAddAlbumMutation>;
export type AddAlbumMutationResult = Apollo.MutationResult<AddAlbumMutation>;
export type AddAlbumMutationOptions = Apollo.BaseMutationOptions<AddAlbumMutation, AddAlbumMutationVariables>;
export const UpdateAlbumDocument = gql`
    mutation UpdateAlbum($albumId: ID!, $input: AlbumInput) {
  updateAlbum(albumID: $albumId, input: $input) {
    id
    title
    type
    artist {
      id
    }
    albumArt
    likeCount
    description
    spotify
    apple
    colors
  }
}
    `;
export type UpdateAlbumMutationFn = Apollo.MutationFunction<UpdateAlbumMutation, UpdateAlbumMutationVariables>;

/**
 * __useUpdateAlbumMutation__
 *
 * To run a mutation, you first call `useUpdateAlbumMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAlbumMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAlbumMutation, { data, loading, error }] = useUpdateAlbumMutation({
 *   variables: {
 *      albumId: // value for 'albumId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateAlbumMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAlbumMutation, UpdateAlbumMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAlbumMutation, UpdateAlbumMutationVariables>(UpdateAlbumDocument, options);
      }
export type UpdateAlbumMutationHookResult = ReturnType<typeof useUpdateAlbumMutation>;
export type UpdateAlbumMutationResult = Apollo.MutationResult<UpdateAlbumMutation>;
export type UpdateAlbumMutationOptions = Apollo.BaseMutationOptions<UpdateAlbumMutation, UpdateAlbumMutationVariables>;
export const DeleteAlbumDocument = gql`
    mutation DeleteAlbum($albumId: ID!) {
  deleteAlbum(albumID: $albumId)
}
    `;
export type DeleteAlbumMutationFn = Apollo.MutationFunction<DeleteAlbumMutation, DeleteAlbumMutationVariables>;

/**
 * __useDeleteAlbumMutation__
 *
 * To run a mutation, you first call `useDeleteAlbumMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAlbumMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAlbumMutation, { data, loading, error }] = useDeleteAlbumMutation({
 *   variables: {
 *      albumId: // value for 'albumId'
 *   },
 * });
 */
export function useDeleteAlbumMutation(baseOptions?: Apollo.MutationHookOptions<DeleteAlbumMutation, DeleteAlbumMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteAlbumMutation, DeleteAlbumMutationVariables>(DeleteAlbumDocument, options);
      }
export type DeleteAlbumMutationHookResult = ReturnType<typeof useDeleteAlbumMutation>;
export type DeleteAlbumMutationResult = Apollo.MutationResult<DeleteAlbumMutation>;
export type DeleteAlbumMutationOptions = Apollo.BaseMutationOptions<DeleteAlbumMutation, DeleteAlbumMutationVariables>;
export const AddArtistDocument = gql`
    mutation AddArtist($input: ArtistInput) {
  addArtist(input: $input) {
    id
    name
    photoUrl
    biography
    albums {
      id
    }
  }
}
    `;
export type AddArtistMutationFn = Apollo.MutationFunction<AddArtistMutation, AddArtistMutationVariables>;

/**
 * __useAddArtistMutation__
 *
 * To run a mutation, you first call `useAddArtistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddArtistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addArtistMutation, { data, loading, error }] = useAddArtistMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddArtistMutation(baseOptions?: Apollo.MutationHookOptions<AddArtistMutation, AddArtistMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddArtistMutation, AddArtistMutationVariables>(AddArtistDocument, options);
      }
export type AddArtistMutationHookResult = ReturnType<typeof useAddArtistMutation>;
export type AddArtistMutationResult = Apollo.MutationResult<AddArtistMutation>;
export type AddArtistMutationOptions = Apollo.BaseMutationOptions<AddArtistMutation, AddArtistMutationVariables>;
export const UpdateArtistDocument = gql`
    mutation UpdateArtist($artistId: ID!, $input: ArtistInput) {
  updateArtist(artistID: $artistId, input: $input) {
    id
    name
    photoUrl
    biography
    albums {
      id
    }
  }
}
    `;
export type UpdateArtistMutationFn = Apollo.MutationFunction<UpdateArtistMutation, UpdateArtistMutationVariables>;

/**
 * __useUpdateArtistMutation__
 *
 * To run a mutation, you first call `useUpdateArtistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateArtistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateArtistMutation, { data, loading, error }] = useUpdateArtistMutation({
 *   variables: {
 *      artistId: // value for 'artistId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateArtistMutation(baseOptions?: Apollo.MutationHookOptions<UpdateArtistMutation, UpdateArtistMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateArtistMutation, UpdateArtistMutationVariables>(UpdateArtistDocument, options);
      }
export type UpdateArtistMutationHookResult = ReturnType<typeof useUpdateArtistMutation>;
export type UpdateArtistMutationResult = Apollo.MutationResult<UpdateArtistMutation>;
export type UpdateArtistMutationOptions = Apollo.BaseMutationOptions<UpdateArtistMutation, UpdateArtistMutationVariables>;
export const DeleteArtistDocument = gql`
    mutation DeleteArtist($artistId: ID!) {
  deleteArtist(artistID: $artistId)
}
    `;
export type DeleteArtistMutationFn = Apollo.MutationFunction<DeleteArtistMutation, DeleteArtistMutationVariables>;

/**
 * __useDeleteArtistMutation__
 *
 * To run a mutation, you first call `useDeleteArtistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteArtistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteArtistMutation, { data, loading, error }] = useDeleteArtistMutation({
 *   variables: {
 *      artistId: // value for 'artistId'
 *   },
 * });
 */
export function useDeleteArtistMutation(baseOptions?: Apollo.MutationHookOptions<DeleteArtistMutation, DeleteArtistMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteArtistMutation, DeleteArtistMutationVariables>(DeleteArtistDocument, options);
      }
export type DeleteArtistMutationHookResult = ReturnType<typeof useDeleteArtistMutation>;
export type DeleteArtistMutationResult = Apollo.MutationResult<DeleteArtistMutation>;
export type DeleteArtistMutationOptions = Apollo.BaseMutationOptions<DeleteArtistMutation, DeleteArtistMutationVariables>;
export const LogInDocument = gql`
    mutation LogIn($password: String!, $username: String!) {
  logIn(password: $password, username: $username)
}
    `;
export type LogInMutationFn = Apollo.MutationFunction<LogInMutation, LogInMutationVariables>;

/**
 * __useLogInMutation__
 *
 * To run a mutation, you first call `useLogInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logInMutation, { data, loading, error }] = useLogInMutation({
 *   variables: {
 *      password: // value for 'password'
 *      username: // value for 'username'
 *   },
 * });
 */
export function useLogInMutation(baseOptions?: Apollo.MutationHookOptions<LogInMutation, LogInMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogInMutation, LogInMutationVariables>(LogInDocument, options);
      }
export type LogInMutationHookResult = ReturnType<typeof useLogInMutation>;
export type LogInMutationResult = Apollo.MutationResult<LogInMutation>;
export type LogInMutationOptions = Apollo.BaseMutationOptions<LogInMutation, LogInMutationVariables>;


export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Admin: ResolverTypeWrapper<Admin>;
  Album: ResolverTypeWrapper<Album>;
  AlbumInput: AlbumInput;
  Artist: ResolverTypeWrapper<Artist>;
  ArtistInput: ArtistInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Colors: ResolverTypeWrapper<Colors>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Admin: Admin;
  Album: Album;
  AlbumInput: AlbumInput;
  Artist: Artist;
  ArtistInput: ArtistInput;
  Boolean: Scalars['Boolean'];
  Colors: Colors;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Mutation: {};
  Query: {};
  String: Scalars['String'];
};

export type AdminResolvers<ContextType = any, ParentType extends ResolversParentTypes['Admin'] = ResolversParentTypes['Admin']> = {
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AlbumResolvers<ContextType = any, ParentType extends ResolversParentTypes['Album'] = ResolversParentTypes['Album']> = {
  albumArt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  apple?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  artist?: Resolver<Maybe<ResolversTypes['Artist']>, ParentType, ContextType>;
  colors?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  likeCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  spotify?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArtistResolvers<ContextType = any, ParentType extends ResolversParentTypes['Artist'] = ResolversParentTypes['Artist']> = {
  albums?: Resolver<Maybe<Array<Maybe<ResolversTypes['Album']>>>, ParentType, ContextType>;
  biography?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ColorsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Colors'] = ResolversParentTypes['Colors']> = {
  colors?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addAlbum?: Resolver<ResolversTypes['Album'], ParentType, ContextType, Partial<MutationAddAlbumArgs>>;
  addArtist?: Resolver<Maybe<ResolversTypes['Artist']>, ParentType, ContextType, Partial<MutationAddArtistArgs>>;
  addToLike?: Resolver<ResolversTypes['Album'], ParentType, ContextType, RequireFields<MutationAddToLikeArgs, 'albumID'>>;
  deleteAlbum?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteAlbumArgs, 'albumID'>>;
  deleteArtist?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteArtistArgs, 'artistID'>>;
  generateColors?: Resolver<Maybe<ResolversTypes['Colors']>, ParentType, ContextType, Partial<MutationGenerateColorsArgs>>;
  logIn?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationLogInArgs, 'password' | 'username'>>;
  removeFromLike?: Resolver<ResolversTypes['Album'], ParentType, ContextType, RequireFields<MutationRemoveFromLikeArgs, 'albumID'>>;
  signUp?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationSignUpArgs, 'password' | 'username'>>;
  updateAlbum?: Resolver<ResolversTypes['Album'], ParentType, ContextType, RequireFields<MutationUpdateAlbumArgs, 'albumID'>>;
  updateArtist?: Resolver<Maybe<ResolversTypes['Artist']>, ParentType, ContextType, RequireFields<MutationUpdateArtistArgs, 'artistID'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  albumsByArtist?: Resolver<Maybe<Array<Maybe<ResolversTypes['Album']>>>, ParentType, ContextType, Partial<QueryAlbumsByArtistArgs>>;
  albumsByTitle?: Resolver<Maybe<Array<Maybe<ResolversTypes['Album']>>>, ParentType, ContextType, Partial<QueryAlbumsByTitleArgs>>;
  albumsByType?: Resolver<Maybe<Array<Maybe<ResolversTypes['Album']>>>, ParentType, ContextType, Partial<QueryAlbumsByTypeArgs>>;
  allAlbums?: Resolver<Array<ResolversTypes['Album']>, ParentType, ContextType>;
  oneAlbum?: Resolver<Maybe<ResolversTypes['Album']>, ParentType, ContextType, RequireFields<QueryOneAlbumArgs, 'id'>>;
};

export type Resolvers<ContextType = any> = {
  Admin?: AdminResolvers<ContextType>;
  Album?: AlbumResolvers<ContextType>;
  Artist?: ArtistResolvers<ContextType>;
  Colors?: ColorsResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};

