module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prefer-const': 'error',
    'arrow-parens': 'error',
    'sort-imports': 'error',
    'require-await': 'error',
    'arrow-spacing': 'error',
    'no-self-compare': 'off',
    'prefer-template': 'error',
    'no-unused-vars': 'error',
    'no-return-await': 'error',
    'no-await-in-loop': 'error',
    'prefer-object-spread': 'error',
    'prefer-arrow-callback': 'error',
    'vue/prop-name-casing': ['error', 'camelCase'],
    semi: ['error', 'always'],
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: true,
          object: true,
        },
        AssignmentExpression: {
          array: true,
          object: true,
        },
      },
      {
        enforceForRenamedProperties: true,
      },
    ],
    camelcase: ['error', { properties: 'always', ignoreImports: true }],
    indent: [2, 2, { SwitchCase: 1 }],
    'prettier/prettier': ['error', { singleQuote: true }],
    'vue/block-lang': [
      'error',
      {
        script: {
          lang: 'ts',
        },
      },
    ],
  },
};
