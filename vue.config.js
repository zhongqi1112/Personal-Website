module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/stephen/'
    : '/',
  transpileDependencies: [
    /\bvue-awesome\b/
  ]
}
