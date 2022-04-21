const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    filename: 'index.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'ShowVolumes',
    libraryTarget: 'window',
    libraryExport: 'default'
  },
};