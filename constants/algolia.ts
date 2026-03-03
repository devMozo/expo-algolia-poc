/**
 * Algolia search configuration.
 * Replace these placeholders with your Algolia Application ID, Search-Only API Key,
 * and index name. In production, read from environment variables and never commit keys.
 */
export const ALGOLIA_APP_ID = process.env.EXPO_PUBLIC_ALGOLIA_APP_ID ?? 'YOUR_APP_ID';
export const ALGOLIA_SEARCH_API_KEY =
  process.env.EXPO_PUBLIC_ALGOLIA_SEARCH_API_KEY ?? 'YOUR_SEARCH_API_KEY';
export const ALGOLIA_INDEX_NAME =
  process.env.EXPO_PUBLIC_ALGOLIA_INDEX_NAME ?? 'YOUR_INDEX_NAME';
