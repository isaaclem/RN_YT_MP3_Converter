module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    jest: true,
  },
  rules: {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    'import/prefer-default-export': 'off',
    'no-underscore-dangle': ['error', { allowAfterThis: true }],
    'react/destructuring-assignment': 'off',
    'react/state-in-constructor': ['off', 'never'],
  },
  globals: {
    fetch: false,
  },
};
