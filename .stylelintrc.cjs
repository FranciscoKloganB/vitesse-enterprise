module.exports = {
  customSyntax: 'postcss-html',
  extends: [
    // Enables parsing of vue files. Required since Stylelint 14 (along with postcss-html)
    'stylelint-config-html/vue',
    // Extends both the standard css as well as standard scss configs (includes both packages)
    'stylelint-config-standard-scss',
    // Enforce a standard order for CSS properties
    'stylelint-config-recess-order',
    // Tweaks stylelint rules to accept css modules specific syntax.
    'stylelint-config-css-modules',
    // Turns of all the rules that would interfere with Prettier
    'stylelint-config-prettier',
  ],
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
    'at-rule-no-unknown': null,
    'selector-max-universal': 1,
    'string-no-newline': null,
    'scss/at-rule-no-unknown': true,
    'scss/dollar-variable-colon-space-after': 'always',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-no-missing-interpolation': true,
    'scss/dollar-variable-pattern': /^[a-z-]+$/,
    'scss/double-slash-comment-whitespace-inside': 'always',
    'scss/operator-no-newline-before': true,
    'scss/operator-no-unspaced': true,
    'scss/selector-no-redundant-nesting-selector': true,
  },
}
