export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/testing/setup-tests.ts'],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
}
