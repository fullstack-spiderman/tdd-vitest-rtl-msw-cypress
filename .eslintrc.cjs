module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:prettier/recommended',

    'plugin:jest-dom/recommended',
    'plugin:testing-library/react',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './jsconfig.json',
  },
  plugins: ['react', 'prettier', 'jest-dom', 'testing-library'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/react-in-jsx-scope': 0,
    'prettier/prettier': 'error',
    'import/prefer-default-export': 0,
    'react/prop-types': 0,
  },
}
