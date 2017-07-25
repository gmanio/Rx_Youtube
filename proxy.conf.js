const PROXY_CONFIG = {
  // "**": {
  //   "target": "http://finance.daum.net",
  //   "secure": false,
  //   "changeOrigin": true
  // },
  //
  "/api/**": {
    "target": "http://finance.daum.net",
    "pathRewrite": {'^/api/' : '/'},
    "secure": false,
    "changeOrigin": true
  },
  //
  // "/xml/**": {
  //   "target": "http://finance.daum.net",
  //   "secure": false,
  //   "changeOrigin": true
  // }
}

module.exports = PROXY_CONFIG;
