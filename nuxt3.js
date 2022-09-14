module.exports = {
  env: {
    browser: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
  },
  extends: [
    './index.js',
    'plugin:vue/vue3-recommended',
  ],
  plugins: [
    'vue',
  ],
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    'vue/html-closing-bracket-spacing': ['error', {
      startTag: 'never',
      endTag: 'never',
      selfClosingTag: 'never',
    }],
    'vue/multi-word-component-names': ['error', {
      ignores: [
        'index', 'default',
      ],
    }],
  },
  // global imports from nuxt composables
  globals: {
    prefetchComponents: 'readonly',
    preloadComponents: 'readonly',
    setPageLayout: 'readonly',
    setResponseStatus: 'readonly',
    updateAppConfig: 'readonly',
    useAppConfig: 'readonly',
    useAsyncData: 'readonly',
    useCookie: 'readonly',
    useError: 'readonly',
    useFetch: 'readonly',
    useHead: 'readonly',
    useHydration: 'readonly',
    useLazyAsyncData: 'readonly',
    useLazyFetch: 'readonly',
    useNuxtApp: 'readonly',
    useRequestEvent: 'readonly',
    useRequestHeaders: 'readonly',
    useRoute: 'readonly',
    useRouter: 'readonly',
    useRuntimeConfig: 'readonly',
    useState: 'readonly',
  },
};
