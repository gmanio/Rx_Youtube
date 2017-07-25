module.exports = {
  navigateFallback: '/index.html',
  stripPrefix: 'dist',
  root: 'dist/',
  staticFileGlobs: [
    'dist/index.html',
    'dist/**.js',
    'dist/**.css',
    'dist/**.png',
    'dist/**.ico',
    'dist/**.woff2',
    'dist/assets/**/*.*',
    'dist/assets/**/**/*.*'
  ]
};
