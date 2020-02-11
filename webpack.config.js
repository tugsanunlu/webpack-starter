const webpack = require("webpack");
const path = require("path");

const config = {
  entry: {
    common: "./src/js/common.js",
    index: "./src/js/index.js",
    about: "./src/js/about.js"
  },
  output: {
    path: path.resolve(__dirname, "dist/assets"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  watch: true
};

module.exports = config;