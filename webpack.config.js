const Critters = require("critters-webpack-plugin");

module.exports = {
  plugins: [
    new Critters({
      preload: "swap",
      includeSelectors: [/^\.btn/, ".banner"],
    }),
  ],
};
