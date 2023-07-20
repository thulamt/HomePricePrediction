const path = require('path');

module.exports = {
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
      },
    moduleFileExtensions: ['js'],
    testEnvironment: 'jsdom',
  };