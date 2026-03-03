const base = require("./app.json");

module.exports = () => {
  const config = JSON.parse(JSON.stringify(base));
  const expo = config.expo;
  let plugins = [...(expo.plugins || [])];

  expo.plugins = plugins;
  return config;
};
