const { join } = require('path')

module.exports = {
  entry: {
    classes: './test/classes.js',
    compiler: './test/compiler.js'
  },
  output: {
    filename: 'bundle-[name].js',
    path: join(__dirname, 'build')
  },
  module: { rules: [
    {
      test: /\.tag$/,
      loader: 'riot-tag-loader',
      enforce: 'pre'
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
  ]}
}
