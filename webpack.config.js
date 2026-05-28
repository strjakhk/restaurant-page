// webpack.config.js
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "node:path";

export default {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(import.meta.dirname, "dist"),
    clean: true,
  },
  // dev server
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  },
  // html plugin
  plugins: [
    new HtmlWebpackPlugin({
        template: "./src/template.html",
    })
  ],
  // loaders
  module: {
    rules: [
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        },
    ],
  },
};
