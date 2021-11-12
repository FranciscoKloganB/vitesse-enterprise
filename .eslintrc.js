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
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ],
    'comma-dangle': ['error', 'only-multiline'],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    'no-console': rulesSeverityOff,
    'no-debugger': rulesSeverityOff,
    'max-len': [
      'error',
      {
        code: 100,
        tabWidth: 2,
      },
    ],
    'import/order': 'off',
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
}
