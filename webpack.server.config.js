const fs = require('fs');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'bin', 'server.js'),
  output: {
    path: 'dist',
    filename: 'server.bundle.js',
  },
  target: 'node',
  externals: fs.readdirSync('node_modules')
    .filter((x) => ['.bin'].indexOf(x) === -1)
    .reduce((nodeModules, module) => Object.assign({}, nodeModules, { [module]: `commonjs ${module}` })),
  node: {
    __filename: true,
    __dirname: true,
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015', 'stage-0'],
        },
      },
      {
        test: /\.less$/,
        loader: 'ignore',
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: require.resolve('react'),
        loader: 'expose?React',
      },
    ],
  },
};
