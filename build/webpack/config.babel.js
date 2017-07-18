import path from 'path'
import webpack from 'webpack'

import { WDS_PORT } from '../../src/shared/config'

const isProd = process.env.NODE_ENV === 'production'

export default {
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    './src/client'
  ],
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, '../../public'),
    publicPath: isProd ? '/static/' : `http://localhost:${WDS_PORT}/public/`
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  devtool: 'source-maps',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    port: WDS_PORT,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
}
