// Generated using webpack-cli https://github.com/webpack/webpack-cli

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    port: 3003,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "app3",
      filename: "remoteEntry.js",
      exposes: {
        "./Menu": "./src/Menu.jsx",
      },
      shared: {
        react: { eager: true, singleton: true },
        "react-dom": {
          requiredVersion: "^18.2.0",
          singleton: true,
          eager: true,
        },
        "react-router-dom": { eager: true, singleton: true },
      },
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  target: "web",
};
