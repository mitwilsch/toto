const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const outputDirectory = "dist";

module.exports = {
  entry: ["babel-polyfill", "./src/client/index.js"],
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader?limit=100000"
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  devServer: {
    // this is not working yet
    https: true,
    host: "0.0.0.0",
    port: 443,
    open: true,
    inline: true,
    disableHostCheck: true,
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        pathRewrite: { "^/api": "" },
        changeOrigin: true
      }
      /* pathRewrite
       * app can call to /api/x
       * request will go to 8080/x
       */
    },
    https: {
      key: fs.readFileSync("/etc/letsencrypt/live/mitwilsch.dev/privkey.pem"),
      cert: fs.readFileSync("/etc/letsencrypt/live/mitwilsch.dev/cert.pem"),
      ca: fs.readFileSync("/etc/letsencrypt/live/mitwilsch.dev/chain.pem")
    }
  },
  plugins: [
    new CleanWebpackPlugin([outputDirectory]),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico"
    })
  ]
};
