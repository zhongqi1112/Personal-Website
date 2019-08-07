module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/blog/'
    : '/',
  transpileDependencies: [
    /\bvue-awesome\b/
  ]
}
