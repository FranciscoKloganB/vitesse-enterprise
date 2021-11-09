const inProductionEnv = process.env.NODE_ENV === 'production'
const rulesSeverityOff = inProductionEnv ? 'warn' : 'off'

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['@antfu', 'prettier'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    '@typescript-eslint/no-explicit-any': rulesSeverityOff,
    '@typescript-eslint/no-unused-vars': [
      'error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ],
    'no-unused-vars': [
      'error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
    ],
    'no-console': rulesSeverityOff,
    'no-debugger': rulesSeverityOff,
    'comma-dangle': ['error', 'only-multiline'
    ],
    'max-len': ['error',
      { 
        code: 100, tabWidth: 2
      }
    ],
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
}