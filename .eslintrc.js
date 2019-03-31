module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  rules: {
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.tsx'],
      },
    ],
    '@typescript-eslint/prefer-interface': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    'react/prop-types': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.tsx'],
      },
    },
  },
  env: {
    browser: true,
    jest: true,
  },
};
