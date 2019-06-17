module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "setupFilesAfterEnv": ["<rootDir>/setupEnzyme.ts"],
  "collectCoverageFrom": [
    "**/*.{ts,tsx}",
    "!**/node_modules/**"
  ]
};
