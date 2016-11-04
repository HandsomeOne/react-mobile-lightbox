/* eslint import/no-extraneous-dependencies: 0 */
const webpack = require('webpack')
const path = require('path')
const autoprefixer = require('autoprefixer')

const config = {
  entry: {
    jsx: './src/Lightbox.jsx',
  },
  output: {
    path: path.join(__dirname, './lib'),
    filename: 'index.js',
    library: 'Lightbox',
    libraryTarget: 'umd',
  },
  externals: {
    react: {
      root: 'React',
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
    },
    swiper: {
      root: 'Swiper',
      commonjs: 'swiper',
      commonjs2: 'swiper',
      amd: 'swiper',
    },
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        exclude: [/node_modules/, /css(\/|\\)raw/],
        loaders: [
          'style',
          'css?modules&localIdentName=[local]__[hash:base64:4]',
          'postcss',
        ],
      },
      {
        test: /\.css$/,
        include: [/node_modules/, /css(\/|\\)raw/],
        loaders: ['style', 'css', 'postcss'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['latest', 'react'],
        },
      },
    ],
  },
  postcss: [autoprefixer()],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
}

if (process.env.NODE_ENV !== 'production') {
  config.entry = {
    jsx: './test/index.jsx',
    vendor: [
      'react',
      'react-dom',
    ],
  }
  config.output = {
    path: path.join(__dirname, './test'),
    filename: 'bundle.js',
  }
  config.plugins = [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
  ]
  delete config.externals
}

module.exports = config
