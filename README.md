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

## Tooling / IDE

If you are using VSCode with Vetur and ESLint extensions installed, be sure to copy following settings into your settings.json for correct linting:
```json
{
  "editor.tabSize": 2,
  "eslint.validate": [
    {
      "language": "vue",
      "autoFix": true
    },
    {
      "language": "html",
      "autoFix": true
    },
    {
      "language": "javascript",
      "autoFix": true
    }
  ],
  "eslint.alwaysShowStatus": true,
  "eslint.autoFixOnSave": true,

  "vetur.validation.script": false,
  "vetur.validation.style": false,

  "css.validate": false,
  "scss.validate": false
}
```
