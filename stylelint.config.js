module.exports = {
  extends: [
    // Use the Standard config as the base
    'stylelint-config-standard',
    // Enforce a standard order for CSS properties
    'stylelint-config-recess-order',
    // Override rules that would interfere with Prettier
    'stylelint-config-prettier',
    // Override rules to allow linting of CSS modules
    'stylelint-config-css-modules',
  ],
  plugins: ['stylelint-scss'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'max-line-length': [
      100,
      {
        ignorePattern: [
          '/(https?://([-\\w\\.]+)+(:\\d+)?(/([\\w/_\\.]*(\\?\\S+)?)?)?)/',
          '/^<path.*/>$/',
        ],
      },
    ],
    // Allow newlines inside class attribute values
    'string-no-newline': null,
    // Limit the number of universal selectors in a selector, avoids slow selectors
    'selector-max-universal': 1,
    // Disallow allow global element/type selectors in scoped modules
    'scss/dollar-variable-colon-space-after': 'always',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-no-missing-interpolation': true,
    'scss/dollar-variable-pattern': /^[a-z-]+$/,
    'scss/double-slash-comment-whitespace-inside': 'always',
    'scss/operator-no-newline-before': true,
    'scss/operator-no-unspaced': true,
    'scss/selector-no-redundant-nesting-selector': true,
    // Allow SCSS and CSS module keywords beginning with `@`
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
  },
}
