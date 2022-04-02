import '@testing-library/jest-dom'
import 'jest-styled-components'

//https://nextjs.org/docs/basic-features/environment-variables#test-environment-variables
//To be able to load .env files for tests
import { loadEnvConfig } from '@next/env'
export default async () => {
  const projectDir = process.cwd()
  loadEnvConfig(projectDir)
}
