const base = require("./app.json");

module.exports = () => {
  const config = JSON.parse(JSON.stringify(base));
  const expo = config.expo;
  let plugins = [...(expo.plugins || [])];

  // Google Sign-In: use env iosUrlScheme if set (otherwise keep app.json placeholder)
  const googleIosUrlScheme =
    process.env.EXPO_PUBLIC_GOOGLE_IOS_URL_SCHEME ||
    process.env.GOOGLE_IOS_URL_SCHEME;
  if (googleIosUrlScheme) {
    plugins = plugins.map((p) => {
      if (Array.isArray(p) && p[0] === "@react-native-google-signin/google-signin") {
        return ["@react-native-google-signin/google-signin", { iosUrlScheme: googleIosUrlScheme }];
      }
      return p;
    });
  }

  // Facebook SDK: add plugin only when env vars are set
  const fbAppId =
    process.env.EXPO_PUBLIC_FB_APP_ID || process.env.FB_APP_ID;
  const fbClientToken =
    process.env.EXPO_PUBLIC_FB_CLIENT_TOKEN || process.env.FB_CLIENT_TOKEN;
  if (fbAppId && fbClientToken) {
    const displayName =
      process.env.EXPO_PUBLIC_FB_DISPLAY_NAME ||
      process.env.FB_DISPLAY_NAME ||
      expo.name ||
      "App";
    plugins.push([
      "react-native-fbsdk-next",
      {
        appID: fbAppId,
        clientToken: fbClientToken,
        displayName,
        scheme: `fb${fbAppId}`,
      },
    ]);
  }

  // Sentry: add plugin only when shouldAddSentrySupport is true
  const shouldAddSentrySupport =
    process.env.SHOULD_ADD_SENTRY_SUPPORT === "true" ||
    process.env.SHOULD_ADD_SENTRY_SUPPORT === "1" ||
    process.env.EXPO_PUBLIC_SHOULD_ADD_SENTRY_SUPPORT === "true" ||
    process.env.EXPO_PUBLIC_SHOULD_ADD_SENTRY_SUPPORT === "1";
  if (shouldAddSentrySupport) {
    const sentryOrg =
      process.env.EXPO_PUBLIC_SENTRY_ORG || process.env.SENTRY_ORG;
    const sentryProject =
      process.env.EXPO_PUBLIC_SENTRY_PROJECT || process.env.SENTRY_PROJECT;
    const sentryUrl =
      process.env.EXPO_PUBLIC_SENTRY_URL || process.env.SENTRY_URL || "https://sentry.io/";
    if (sentryOrg && sentryProject) {
      plugins.push([
        "@sentry/react-native/expo",
        { organization: sentryOrg, project: sentryProject, url: sentryUrl },
      ]);
    }
  }

  expo.plugins = plugins;
  return config;
};
