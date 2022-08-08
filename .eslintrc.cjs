const inProductionEnv = process.env.NODE_ENV === 'production'
const rulesSeverityOff = inProductionEnv ? 'warn' : 'off'

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['@antfu', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    '@typescript-eslint/no-namespace': ['error', { allowDeclarations: true }],
    '@typescript-eslint/no-explicit-any': rulesSeverityOff,
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^(_|Cypress)' },
    ],
    'comma-dangle': ['error', 'only-multiline'],
    'no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^(_|Cypress)' },
    ],
    'no-console': rulesSeverityOff,
    'no-debugger': rulesSeverityOff,
    'no-unused-expressions': 'off',
    'max-len': [
      'error',
      {
        code: 88,
        tabWidth: 2,
      },
    ],
    // Delegates import sorting order to import-sort plugin
    'import/order': 'off',
    // Delegates curly brace spacing to prettier
    'object-curly-spacing': 'off',
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
}
