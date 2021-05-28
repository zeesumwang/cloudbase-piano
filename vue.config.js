module.exports = {
  chainWebpack: config => {
    config.mode('development');
    config.optimization.delete('splitChunks');
  },
  filenameHashing: false,
  devServer: {
    hot: false,
  }
}
