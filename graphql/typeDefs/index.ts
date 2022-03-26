import { gql } from 'apollo-server-micro'

const typeDefs = gql`
  type Query {
    allAlbums: [Album!]!
    oneAlbum(id: ID!): Album
    albumsByType(type: String): [Album!]!
    artistAlbums(artist: String): [Album!]!
  }

  type Mutation {
    # addToLike(id: ID!): Album!
    # removeFromLike(id: ID!): Album!
    # addAlbum(input: AlbumInput): Album
    # deleteAlbum(id: ID!): Boolean!
    # updateAlbum(id: ID!, input: AlbumInput): Album!
    generateColors(imageUrl: String): Colors
    addArtist(input: ArtistInput): Artist
    deleteArtist(artistID: ID!): Boolean!
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

  input AlbumInput {
    title: String!
    type: String!
    artist: String!
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
`
export default typeDefs
