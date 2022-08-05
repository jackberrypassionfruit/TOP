module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-restricted-syntax': 'off',
    'max-classes-per-file': 'off',
    'class-methods-use-this': 'off',
    'brace-style': 'off',
    'guard-for-in': 'off',
  },
};
