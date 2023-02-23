module.exports = {
  root: true,
  env: {
    node: true,
    node: true,
    es6: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prettier/prettier': 0,
    eqeqeq: 2,
    'comma-dangle': 0,
    'no-var': 2,
    'no-unused-vars': [2, { varsIgnorePattern: '.*', args: 'none' }],
    'vue/multi-word-component-names': 'off'
  }
};
