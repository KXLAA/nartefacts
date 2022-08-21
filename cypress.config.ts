import { defineConfig } from 'cypress'

const uri =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/api/graphql'
    : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/graphql`

export default defineConfig({
  chromeWebSecurity: false,
  video: false,
  e2e: {
    baseUrl: uri,
  },
})
