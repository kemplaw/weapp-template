module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  env: {
    es2021: true,
    node: true,
  },
  gloabl: {
    wx: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {},
}
