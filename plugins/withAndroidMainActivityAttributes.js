const { withAndroidManifest } = require("@expo/config-plugins");

/**
 * Expo config plugin to set Android <application> attributes
 * (e.g. android:allowBackup, android:fullBackupContent).
 * @param {import('@expo/config-plugins').ExpoConfig} config
 * @param {{ "android:allowBackup"?: string, "android:fullBackupContent"?: string }} options
 */
function withAndroidMainActivityAttributes(config, options = {}) {
  return withAndroidManifest(config, (config) => {
    const application = config.modResults?.manifest?.application?.[0];
    if (!application) return config;
    application.$ = application.$ || {};
    if (options["android:allowBackup"] != null) {
      application.$["android:allowBackup"] = options["android:allowBackup"];
    }
    if (options["android:fullBackupContent"] != null) {
      application.$["android:fullBackupContent"] = options["android:fullBackupContent"];
    }
    return config;
  });
}

module.exports = withAndroidMainActivityAttributes;
