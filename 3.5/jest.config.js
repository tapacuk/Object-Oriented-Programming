export default {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { useESM: true }],
  },
  moduleNameMapper: {
    '^@bll-service/(.*)$': '<rootDir>/bll-service/src/$1',
  },
  collectCoverage: true,
  coverageProvider: 'v8',
  collectCoverageFrom: [
    './bll-service/src/**/*.ts',
    '!./bll-service/src/lib/**',
  ],
  coverageDirectory: '<rootDir>/bll-service/tests/coverage',
  coverageReporters: ['text', 'lcov', 'html'],
};
