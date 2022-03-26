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
    addAlbum(input: AlbumInput): Album!
    updateAlbum(albumID: ID!, input: AlbumInput): Album!
    deleteAlbum(albumID: ID!): Boolean!
    generateColors(imageUrl: String): Colors
    addArtist(input: ArtistInput): Artist
    updateArtist(artistID: ID!, input: ArtistInput): Artist
    deleteArtist(artistID: ID!): Boolean!

    authenticate(email: String, password: String!): String!
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
`
export default typeDefs
