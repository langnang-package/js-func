module.exports = {
  roots: [
    "<rootDir>/test"
  ],
  testRegex: '/*.(jsx?|tsx?)$',
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};