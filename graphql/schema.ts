import { gql } from 'apollo-server-micro'

export const typeDefs = gql`
  type Query {
    albums: [Album!]!
    album(id: ID!): Album
    albumType(type: String): Album
    artistAlbums(artist: String): [Album!]!
  }

  type Mutation {
    addToLike(id: ID!): Album!
    removeFromLike(id: ID!): Album!
    addAlbum(input: AlbumInput): Album
    deleteAlbum(id: ID!): Boolean!
    updateAlbum(id: ID!, input: AlbumInput): Album!
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
    artist: ArtistInput
    albumArt: String!
    likeCount: Int
    description: String
    spotify: String
    apple: String
    colors: [String!]!
  }

  #   type Colors {
  #     colors: [String!]!
  #     gradient: String
  #   }

  type Artist {
    id: ID!
    name: String
    photoUrl: String
    biography: String
    albums: [Album]
  }

  input ArtistInput {
    name: String
    photoURL: String
    biography: String
  }
`
