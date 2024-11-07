import { resolve as _resolve, join } from "path";

export const entry = "./src/index.js";
export const output = {
  path: _resolve(__dirname, "dist"),
  filename: "bundle.js",
};
export const module = {
  rules: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
    },
  ],
};
export const devServer = {
  contentBase: join(__dirname, "dist"),
  compress: true,
  port: 3000,
};
export const resolve = {
  extensions: [".js", ".jsx"],
};
