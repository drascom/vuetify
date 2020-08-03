const path = require("path");
const config = require("./src/config.js");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/dist/" : "/",

  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: config.title,
    resolve: {
      alias: {
        "@": resolve("src")
      }
    }
  },

  devServer: {
    open: true,
    overlay: {
      warnings: true,
      errors: true
    }
  },

  pwa: {
    name: "Drascom CRM",
    manifestCrossorigin: "anonymous"
  }
};
