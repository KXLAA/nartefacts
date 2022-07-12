import { gql } from 'apollo-server-micro'

const typeDefs = gql`
  type Query {
    allAlbums(first: Int, after: String): AlbumsConnection
    oneAlbum(id: ID!): Album
    albumsByType(type: String!, first: Int, after: String): AlbumsConnection
    albumsByTitle(title: String!, first: Int, after: String): AlbumsConnection
    albumsByArtist(artist: String!, first: Int, after: String): AlbumsConnection
    analytics: [Analytics!]!
  }

  type Mutation {
    addToLike(albumID: ID!): Boolean
    removeFromLike(albumID: ID!): Boolean

    generateColors(imageUrl: String!): Colors
    generateCss(colors: [String]!): String
    generateCode(colors: [String]!): String

    addAlbum(input: AlbumInput): Album!
    updateAlbum(albumID: ID!, input: AlbumInput): Album!
    deleteAlbum(albumID: ID!): Boolean!

    signUp(username: String!, password: String!): String!
    logIn(username: String!, password: String!): String!

    updateAnalytics(id: ID!): Analytics
  }

  type Album {
    id: ID!
    albumArt: String!
    artist: Artist!
    colors: [String!]!
    likeCount: Int!
    title: String!
    type: String!
    urls: Urls!
  }

  type Admin {
    id: ID!
    email: String
  }

  input AlbumInput {
    albumArt: String!
    artist: ArtistInput!
    colors: [String!]!
    likeCount: Int
    title: String!
    type: String!
    urls: UrlsInput!
  }

  type Colors {
    colors: [String!]!
    # gradient: String
  }

  type Urls {
    apple: String
    spotify: String
  }

  type Artist {
    name: String
    photoURL: String
  }

  type Analytics {
    id: ID!
    generatedPalettes: Int
  }

  input ArtistInput {
    name: String
    photoURL: String
  }

  input UrlsInput {
    apple: String
    spotify: String
  }

  # Defining paginated relationships using the cursor connections specification
  type AlbumEdges {
    cursor: String
    node: Album!
  }

  type AlbumPageInfo {
    endCursor: String
    hasNextPage: Boolean
  }

  type AlbumsConnection {
    edges: [AlbumEdges!]!
    node: [Album!]!
    pageInfo: AlbumPageInfo
  }
`
export default typeDefs
