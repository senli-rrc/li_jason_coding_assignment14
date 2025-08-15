module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/li_jason_ui_garden_build_checks/src/setupTests.ts"],
  moduleNameMapper: {
    ".(css|less|scss)$": "identity-obj-proxy",
  },
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  transformIgnorePatterns: [
    "node_modules/(?!(.*\\.mjs$))"
  ],
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  globals: {
    'ts-jest': {
      useESM: true
    }
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: [
    "<rootDir>/**/__tests__/**/*.(ts|tsx|js)",
    "<rootDir>/**/*.(test|spec).(ts|tsx|js)"
  ],
  collectCoverageFrom: [
    "**/*.(ts|tsx)",
    "!**/*.d.ts",
    "!**/node_modules/**",
    "!**/dist/**",
    "!**/coverage/**"
  ]
};
