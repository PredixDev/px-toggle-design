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
      'dist/css/src/style.css': 'style.scss',
      'dist/css/px-toggle-design-demo.css': 'px-toggle-design-demo.scss'
    }
  }
}
