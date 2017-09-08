var path = require("path");

module.export = {
  entry: ["app.js"],
  output: {
    path: path.resolve(__dirname + "/dist"),
    filename: "app.bundle.js"
  },
  rules: {
      
  }
  devtool: "source-map"
};
