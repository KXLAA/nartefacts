module.exports = {
  transformIgnorePatterns: [
    //https://github.com/formkit/auto-animate/issues/29
    '[/\\\\]node_modules[/\\\\](?!(@formkit/auto-animate)).+\\.(js|jsx|mjs|cjs|ts|tsx)$',
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',
  },
  testEnvironment: 'jest-environment-jsdom',
  //https://stackoverflow.com/questions/64792387/jest-ignore-cypress-test
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.next/',
    '<rootDir>/cypress/',
    '<rootDir>/src/graphql/generated/',
    '<rootDir>/src/graphql/operations/',
    '<rootDir>/src/pages/api/',
  ],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)?', '!src/**/stories.tsx'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  moduleDirectories: ['node_modules', 'src'],
  modulePaths: ['node_modules'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1',
    '^public/(.*)$': '<rootDir>/public/$1',
  },
}
