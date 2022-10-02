module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:astro/recommended',
    'eslint-config-standard',
    'standard-with-typescript'
  ],
  overrides: [
    {
      files: ['*.astro'],
      plugins: ['astro'],
      env: {
        node: true,
        'astro/astro': true,
        es2020: true
      },
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
        sourceType: 'module'
      },
      rules: {
      }
    },
    {
      files: ['**/*.astro/*.js', '*.astro/*.js'],
      env: {
        browser: true,
        es2020: true
      },
      parserOptions: {
        sourceType: 'module'
      },
      rules: {
        'prettier/prettier': 'off'
      }
    }
    // ...
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'no-undef': 0
  }
}
