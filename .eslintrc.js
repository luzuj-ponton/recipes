module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: "module",
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  plugins: ["@typescript-eslint"],
  ignorePatterns: ['.eslintrc.js'],
  extends: [
    "airbnb-typescript",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier/@typescript-eslint",
  ],
};
