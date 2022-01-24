module.exports = {
  root: true,
  extends: ['plugin:kdu-libs/recommended'],
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  rules: {
    'no-unused-vars': 'off',
    'no-undef': 'off'
  }
}