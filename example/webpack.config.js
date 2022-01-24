const KduLoaderPlugin = require('kdu-loader/lib/plugin')

module.exports = {
  mode: 'development',
  context: __dirname,
  entry: './src/main.ts',
  output: {
    path: __dirname,
    filename: 'build.js'
  },
  resolve: {
    alias: {
      kdu$: 'kdu/dist/kdu.esm.js'
    },
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.kdu$/],
              appendTsxSuffixTo: [/\.kdu$/]
            }
          }
        ]
      },
      {
        test: /\.kdu$/,
        use: ['kdu-loader']
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new KduLoaderPlugin()
  ]
}
