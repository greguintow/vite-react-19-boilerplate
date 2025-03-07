/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2022,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts']
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true
      }
    }
  },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'react-compiler'],
  rules: {
    'react/function-component-definition': ['error', { namedComponents: 'arrow-function' }],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.tsx']
      }
    ],
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react-compiler/react-compiler': 'error',
    'import/no-unresolved': [
      'error',
      {
        ignore: ['.css', '.svg']
      }
    ],
    'import/extensions': [
      'error',
      'never',
      {
        css: 'always',
        json: 'always',
        svg: 'always'
      }
    ],
    'import/no-default-export': 'error',
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': true,
        'ts-nocheck': 'allow-with-description',
        'ts-check': 'allow-with-description'
      }
    ],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface']
  }
}
