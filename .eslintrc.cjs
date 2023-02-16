/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript',
  ],
  ignorePatterns: [
    'node_modules',
    'dist',
    'coverage',
  ],
  rules: {
    'import/prefer-default-export': 'off',
    'max-len': ['error', { code: 100 }],
    'arrow-body-style': ['error', 'always'],
    'no-bitwise': 'off',
    'no-mixed-operators': 'off',
    'react/require-default-props': 'off',
    'jsx-quotes': ['error', 'prefer-double'],
    'consistent-return': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-underscore-dangle': 'off',
    '@typescript-eslint/naming-convention': 'off',
    'react/function-component-definition': 'off',
  },
  overrides: [
    {
      files: ['*.test.tsx', 'vitest.config.ts', 'vite.config.ts'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
  settings: {
    react: {
      version: "18"
    }
  },
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  }
}