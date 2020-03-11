const nodeExternals = require('webpack-node-externals');

module.exports = {
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".ts"]
  },
  output: {
    libraryTarget: 'commonjs2'
  },
  target: "node",
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.ts?$/,
        loader: "ts-loader"
      }
    ]
  },

  mode: "development"
};