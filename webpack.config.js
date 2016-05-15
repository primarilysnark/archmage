const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src',
  output: {
    path: 'public/dist',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.(jpg|jpeg)$/,
        loader: 'url-loader',
        query: {
          limit: 100000,
        },
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader!less-loader'),
      },
      {
        test: /\.jsx?$/,
        excluse: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
        },
      },
      {
        test: require.resolve('react'),
        loader: 'expose?React',
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('styles.css', {
      allChunks: true,
    }),
  ],
};
