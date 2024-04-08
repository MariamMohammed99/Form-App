/** @type {import('ts-jest').JestConfigWithTsJest} */

const jestConfig = {
  preset: 'ts-jest',
  testMatch: ['src/**/*.{ts,tsx}', '**/?(*.)+(spec|integration).+(ts|tsx)'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['ts-jest', { tsconfig: 'tsconfig.jest.json' }],
    '^.+\\.js$': 'babel-jest', // Add this line to handle ES6 modules
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(scss|sass|css)$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'node'],
  //@TODO: remove to healthcare and delete useless patterns and styleguide
  testPathIgnorePatterns: [
    '/node_modules/',
    'src/common/patterns',
    'src/common/styleguide',
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    'src/common/patterns',
    'src/common/styleguide',
  ],
  //@TODO: check aggreated coverage from jest and cypress
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts'],
  coverageDirectory: 'coverage/jest',
  coverageReporters: ['text', 'html', 'json'],
  testEnvironment: 'jsdom',
  reporters: ['default'],
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!@vfde-react/pattern)'],
  setupFilesAfterEnv: ['./jest.setup.ts'],
};

module.exports = jestConfig;
