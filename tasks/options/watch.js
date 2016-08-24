module.exports = {
  options: {
    livereload: true,
  },
  css: {
    files: ['*.scss', 'sass/*.scss'],
    tasks: ['sass', 'autoprefixer']
  },
  html:{
    files: ['index.html'],
    tasks: ['htmlmin']
  }
}
