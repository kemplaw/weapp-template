module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  globals: {
    App: true,
    getApp: true,
    Page: true,
    wx: true,
    Component: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': 1,
  },
}
