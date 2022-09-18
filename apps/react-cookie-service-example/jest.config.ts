/* eslint-disable */
export default {
  displayName: "react-cookie-service-example",
  preset: "../../jest.preset.js",
  transform: {
    "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": "@nrwl/react/plugins/jest",
    "^.+\\.[tj]sx?$": ['babel-jest', { presets: ['@nrwl/react/babel'] }]
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  coverageDirectory: "../../coverage/apps/react-cookie-service-example"
};
