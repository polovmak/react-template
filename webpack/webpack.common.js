const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require('path')

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  resolve: {
    alias: {
      '@root': resolve(__dirname, '../../src/'),
      '@assets': resolve(__dirname, '../../src/assets/'),
      '@images': resolve(__dirname, '../../src/assets/img/'),
      '@styles': resolve(__dirname, '../../src/assets/styles/'),
      '@components': resolve(__dirname, '../../src/components/'),
      '@data': resolve(__dirname, '../../src/data/'),
      '@features': resolve(__dirname, '../../src/features/'),
      '@hooks': resolve(__dirname, '../../src/hooks/'),
      '@layouts': resolve(__dirname, '../../src/layouts/'),
      '@pages': resolve(__dirname, '../../src/pages/'),
      '@services': resolve(__dirname, '../../src/services/'),
      '@utils': resolve(__dirname, '../../src/utils/'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
  ],
}
