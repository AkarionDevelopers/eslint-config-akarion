# Akarion ESLint config

> This package provides the Akarion base .eslintrc as an extensible shared config.

For the most part the linting rules are based on the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) and the [Airbnb ESLint base config](https://www.npmjs.com/package/eslint-config-airbnb-base).

## Usage

```bash
npm install AkarionDevelopers/eslint-config-akarion#v1.0.0 --save-dev
```

**For regular JavaScript and Node.js projects**

```js
// .eslintrc.js
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'akarion',
  ],
};
```

**For Vue.js projects**

```js
// .eslintrc.js
module.exports = {
  root: true,
  env: {
    browser: true,
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'akarion/vue',
  ],
};
```
