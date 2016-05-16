const fs = require('fs');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'bin', 'server.js'),
  output: {
    path: 'dist',
    filename: 'server.bundle.js',
  },
  target: 'node',
  externals: fs.readdirSync(path.resolve(__dirname, 'node_modules'))
    .concat([
      'react-dom/server', 'react/addons',
    ])
    .reduce((ext, mod) => Object.assign({}, ext, { [mod]: `commonjs ${mod}` }), {}),
  node: {
    __filename: true,
    __dirname: true,
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015', 'stage-0'],
        },
      },
    ],
  },
};
