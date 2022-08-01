/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa')

const isProd = process.env.NODE_ENV === 'production'
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  pwa: {
    dest: 'public',
    disable: !isProd,
  },
  images: {
    domains: ['ucarecdn.com', 'nartefact-upload.s3.eu-west-2.amazonaws.com'],
  },
}

module.exports = withBundleAnalyzer(withPWA(nextConfig))
