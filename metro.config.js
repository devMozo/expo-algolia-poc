const { getSentryExpoConfig } = require("@sentry/react-native/metro");

module.exports = (() => {
  const config = getSentryExpoConfig(__dirname);
  const { transformer, resolver } = config;

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  };

  // SDK 52 configures monorepo (watchFolders, nodeModulesPaths) automatically;
  // we only keep customizations for SVG and resolver fields.
  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
    resolverMainFields: ["react-native", "browser", "main"],
    sourceExts: [...resolver.sourceExts, "svg", "mjs"],
  };

  return config;
})();
