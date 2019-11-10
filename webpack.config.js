const path = require('path')

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',
    library: 'use-classic-state',
    libraryTarget: 'umd',
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
}
