const paths = require('./paths')

module.exports = {
  mode: 'development',
  entry: paths.appServerTs,
  output: {
    filename: 'server.js',
    path: paths.appBuild,
    publicPath: '/'
  },
  devtool: 'source-map',
  target: 'node',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      {test: /\.tsx?$/, loader: "awesome-typescript-loader"},
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
        loader: require.resolve('url-loader'),
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
      { test: /\.css$/i, use: ['style-loader', 'css-loader'] }
    ]
  }
}
