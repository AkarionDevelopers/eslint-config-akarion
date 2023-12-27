module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint-config-airbnb-base',
  ],
  plugins: [
    '@typescript-eslint',
  ],
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }],
    '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
    '@typescript-eslint/no-useless-constructor': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'class-methods-use-this': 'off',
    'no-useless-constructor': 'off',
    'no-await-in-loop': 'off',
    'arrow-parens': [2, 'as-needed', { requireForBlockBody: true }],
    'import/prefer-default-export': 'off',
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      ts: 'never',
      scss: 'never',
    }],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.json'],
      },
    },
  },
  overrides: [
    {
      files: [
        '**/*.test.ts',
      ],
      env: {
        jest: true,
      },
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
