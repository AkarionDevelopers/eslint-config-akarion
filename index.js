module.exports = {
  extends: [
    'eslint-config-airbnb-base',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'implicit-arrow-linebreak': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'object-curly-newline': ['error', {
      consistent: true,
    }],
  },
};
