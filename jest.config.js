const nextJest = require("next/jest");
const createJestConfig = nextJest({
  dir: "./",
});
const customJestConfig = {
  // moduleDirectories: ["node_modules", "<rootDir>/"],
  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/components/$1",
    "^@/pages/(.*)$": "<rootDir>/pages/$1",
    "^@/styles/(.*)$": "<rootDir>/styles/$1",
    "^@/utils/(.*)$": "<rootDir>/utils/$1",
    "^@/hooks/(.*)$": "<rootDir>/hooks/$1",
    "^@/context/(.*)$": "<rootDir>/context/$1",
    "^@/types/(.*)$": "<rootDir>/types/$1",
    "^@/constants/(.*)$": "<rootDir>/constants/$1",
    "^@/services/(.*)$": "<rootDir>/services/$1",
    "^@/api/(.*)$": "<rootDir>/api/$1",
    "^@/models/(.*)$": "<rootDir>/models/$1",
    "^@/config/(.*)$": "<rootDir>/config/$1",
    "^@/next.config.js$": "<rootDir>/next.config.js",
    "^@/next-env.d.ts$": "<rootDir>/next-env.d.ts",
    "^@/next-i18next.config.js$": "<rootDir>/next-i18next.config.js",
    "^@/next-i18next.config.js$": "<rootDir>/next-i18next.config.js",
    "^@/next-i18next.config.js$": "<rootDir>/next-i18next.config.js",
  },
  testEnvironment: "jest-environment-jsdom",
};
module.exports = createJestConfig(customJestConfig);