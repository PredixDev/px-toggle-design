var importOnce = require('node-sass-import-once');

module.exports = {
  dist: {
    options: {
      importer: importOnce,
      importOnce: {
        index: true,
        bower: true
      }
    },
    files: {
      'css/noprefix/style.css': 'sass/style.scss',
      'css/noprefix/px-toggle-design-demo.css': 'sass/px-toggle-design-demo.scss'
    }
  }
}
