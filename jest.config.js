// eslint-disable-next-line no-undef
module.exports = {
  preset: 'ts-jest', // Fügt die richtige Jest-Voreinstellung für TypeScript hinzu
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Erlaubt die Verarbeitung von TypeScript-Dateien
  },
  testMatch: ['<rootDir>/src/**/*.spec.ts'], // Nutze `testMatch` statt `testRegex`
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  roots: ['<rootDir>/src'],
};