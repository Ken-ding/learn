const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path=require('path');

module.exports = {
  entry: "./index.js",
  output:{
    filename: "app.[hash].js",
    path: path.resolve(process.cwd(), 'dist'),
  },
  resolve:{
    extensions: [".js"],
    alias: {
        "actions":path.resolve(__dirname,"actions"),
        "components":path.resolve(__dirname,"components"),
        "containers":path.resolve(__dirname,"containers"),
        "reducers":path.resolve(__dirname,"reducers")
    }
  },
  devtool:"eval-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  },
  plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({  // Also generate a test.html
        filename: 'index.html',
        template: 'index.html'
      })
    ],
};
