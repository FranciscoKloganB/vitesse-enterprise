module.exports = {
  '*.js': ['yarn lint:js'],
  '*.vue': ['yarn lint:css', 'yarn lint:js', 'yarn lint:prettier'],
  '*.(s)?css': ['yarn lint:css', 'yarn lint:prettier'],
  '*.md': ['yarn lint:md'],
  '*.{png,jpeg,jpg,gif,svg}': ['imagemin-lint-staged'],
  '{!(package)*.json,*.code-snippets,.!(browserslist)*rc}': [
    'yarn prettier --write --loglevel warn --parser json',
  ],
}
