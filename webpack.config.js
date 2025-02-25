const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // the entry points - name/value pairs
  entry: {
    index: "./src/js/index.js",
    "nutrition-app": "./src/js/nutrition-app.js",
  },
  output: {
    // name will refer to the name used in the entry name/value pair
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  mode: "development",
  module: {
    // rules specify how to process each file type, e.g. process html files as html using the html-loader
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    // create a new html plugin object for each html page
    new HtmlWebpackPlugin({
      template: "./src/index.html", // The source HTML file.
      filename: "index.html", // The name of the output HTML file.
      chunks: ["index"], // Specifies which entry point's bundle(s) to include in this HTML file.
    }),
    new HtmlWebpackPlugin({
      template: "./src/nutrition-app.html", // The source HTML file.
      filename: "nutrition-app.html", // The name of the output HTML file.
      chunks: ["nutrition-app"], // Specifies which entry point's bundle(s) to include in this HTML file.
    }),
    // only need one object for the css plugin
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // Serve static files from the 'dist' directory
    },
    compress: true, // Enable gzip compression
    port: 9000, // Serve the app on http://localhost:9000
    open: true, // Open the browser after the server starts
  },
};
