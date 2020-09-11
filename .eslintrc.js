module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['react', 'prettier', 'import', 'jsx-a11y'],
  env: {
    browser: true,
    node: true,
  },
  parser: 'babel-eslint',
  rules: {
    'react/no-multi-comp': 0,
    'react/forbid-prop-types': 0,
    'react/prop-types': 0,
    'react/jsx-filename-extension': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-props-no-spreading': 0,
    'class-methods-use-this': 0,
    'no-underscore-dangle': [
      'error',
      {
        allow: ['__REDUX_DEVTOOLS_EXTENSION__'],
      },
    ],
    'consistent-return': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/anchor-has-content': 0,
    'jsx-a11y/label-has-for': 0,
    'no-param-reassign': 0,
    'linebreak-style': 0,
  },
};
