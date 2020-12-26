module.exports = {
  extends: [
    './index.js',
    'plugin:vue/recommended',
    '@vue/typescript/recommended',
  ],
  plugins: [
    'vue',
  ],
  rules: {
    'vue/html-closing-bracket-spacing': ['error', {
      startTag: 'never',
      endTag: 'never',
      selfClosingTag: 'never',
    }],
  },
};
