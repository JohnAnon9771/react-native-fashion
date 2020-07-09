module.exports = {
  env: {
    es2020: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "react-native-wcandillon"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "jsx-a11y", "import", "@typescript-eslint"],
  rules: {
    "react/style-prop-object": "off",
    "import/prefer-default-export": "off",
    "global-require": "off",
  },
};
