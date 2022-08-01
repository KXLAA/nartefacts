/* istanbul ignore file */

import { NextRouter } from 'next/router'

import { ColorsTuple } from '@/components/palette'

export const imageUrl =
  'https://ucarecdn.com/c515e4b5-a5bb-44a3-85d0-f139497e0de0/forbrokenearsep_tems.jpeg'

export const colors: ColorsTuple = [
  '#095525',
  '#673636',
  '#379273',
  '#136407',
  '#573227',
  '#547820',
  '#163598',
  '#682052',
]

export const mockAlbum = {
  title: 'for broken ears',
  id: '8a9020b2-363b-4a4f-ad26-d6d55b51bqes',
  description: 'yes',
  type: 'ep',
  urls: {
    spotify:
      'https://open.spotify.com/album/2sU8ByeYc5BOBFNDr58CGV?autoplay=true',
    apple: 'https://music.apple.com/gb/album/for-broken-ears/1532252592',
  },
  artist: {
    name: 'taylor swift',
    imageUrl:
      'https://ucarecdn.com/c515e4b5-a5bb-44a3-85d0-f139497e0de0/forbrokenearsep_tems.jpeg',
  },
  albumArt:
    'https://ucarecdn.com/c515e4b5-a5bb-44a3-85d0-f139497e0de0/forbrokenearsep_tems.jpeg',
  colors: [
    '#cc8d45',
    '#1e1f17',
    '#715223',
    '#5a3711',
    '#eac374',
    '#c9c9ca',
    '#484c4c',
    '#eecc6c',
  ],
  likeCount: 1,
}

export function createMockRouter(router: Partial<NextRouter>): NextRouter {
  return {
    basePath: '',
    pathname: '/',
    route: '/',
    query: {},
    asPath: '/',
    back: jest.fn(),
    beforePopState: jest.fn(),
    prefetch: jest.fn(),
    push: jest.fn(),
    reload: jest.fn(),
    replace: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
    isFallback: false,
    isLocaleDomain: false,
    isReady: true,
    defaultLocale: 'en',
    domainLocales: [],
    isPreview: false,
    ...router,
  }
}
