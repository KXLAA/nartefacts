import { gql } from 'apollo-server-micro'

const typeDefs = gql`
  type Query {
    allAlbums(first: Int, after: String): AlbumResponse
    oneAlbum(id: ID!): Album
    albumsByType(type: String!, first: Int, after: String): AlbumResponse
    albumsByTitle(title: String!, first: Int, after: String): AlbumResponse
    albumsByArtist(artist: String!, first: Int, after: String): AlbumResponse
  }

  type Mutation {
    addToLike(albumID: ID!): Album!
    removeFromLike(albumID: ID!): Album!

    generateColors(imageUrl: String): Colors

    addAlbum(input: AlbumInput): Album!
    updateAlbum(albumID: ID!, input: AlbumInput): Album!
    deleteAlbum(albumID: ID!): Boolean!

    addArtist(input: ArtistInput): Artist
    updateArtist(artistID: ID!, input: ArtistInput): Artist
    deleteArtist(artistID: ID!): Boolean!

    signUp(username: String!, password: String!): String!
    logIn(username: String!, password: String!): String!
  }

  type Album {
    id: ID!
    title: String!
    type: String!
    artist: Artist
    albumArt: String!
    likeCount: Int
    description: String
    spotify: String
    apple: String
    colors: [String!]!
  }

  type Admin {
    id: ID!
    email: String
  }

  input AlbumInput {
    title: String!
    type: String!
    artistName: String!
    albumArt: String!
    likeCount: Int
    description: String
    spotify: String
    apple: String
    colors: [String!]!
  }

  type Colors {
    colors: [String!]!
    # gradient: String
  }

  type Artist {
    id: ID!
    name: String
    photoUrl: String
    biography: String
    albums: [Album]
  }

  input ArtistInput {
    name: String
    photoUrl: String
    biography: String
  }

  # Defining paginated relationships using the cursor connections specification
  type AlbumEdges {
    cursor: String
    node: Album
  }

  type AlbumPageInfo {
    endCursor: String
    hasNextPage: Boolean
  }

  type AlbumResponse {
    edges: [AlbumEdges]
    pageInfo: AlbumPageInfo
  }
`
export default typeDefs
