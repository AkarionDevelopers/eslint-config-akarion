module.exports = {
  extends: [
    '@vue/typescript/recommended',
    './index.js',
    'plugin:vue/recommended',
  ],
  plugins: [
    'vue',
  ],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    'vue/html-closing-bracket-spacing': ['error', {
      startTag: 'never',
      endTag: 'never',
      selfClosingTag: 'never',
    }],
  },
};
