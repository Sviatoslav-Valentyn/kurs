export default {
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest",
  },
  testEnvironment: "node",
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
  },
};
