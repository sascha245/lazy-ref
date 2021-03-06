module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  testMatch: ['**/tests/unit/**/*.spec.(ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'],
  testURL: 'http://localhost/'
};
