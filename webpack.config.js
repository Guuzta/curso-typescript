/* eslint-disable */

const path = require("path");

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: "development",
  entry: "./src/A0019-exercicio/form-control.ts",

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          configFile: "tsconfig-frontend.json",
        },
      },
    ],
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "frontend", "assets", "js"),
  },

  devtool: "source-map",
};
