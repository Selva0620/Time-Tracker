/** @type {import('eslint').Linter.Config} */
module.exports = {
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  env: {
    node: true, // Enables Node.js global variables
    browser: true, // If using in a browser environment
  },
  rules: {
    'no-undef': 'warn', // Temporarily disable undefined variable checks
  },
};
