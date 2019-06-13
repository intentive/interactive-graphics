const path = require('path')
const PeerDepsExternalsPlugin = require('peer-deps-externals-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: '@intentive/interactive-graphics',
    libraryTarget: 'umd'
  },
  plugins: [new PeerDepsExternalsPlugin()],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: ['babel-loader']
      }
    ]
  }
}
