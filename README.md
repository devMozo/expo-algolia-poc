# React InstantSearch + Expo SDK 54 — “constructor is not callable” (reproduction)

This repo is a minimal reproduction for a runtime error when using **React InstantSearch** in an **Expo SDK 54** app.

## The error

We’re using React InstantSearch (`react-instantsearch-core` v7.26.0, `instantsearch.js` 4.90.0) in an Expo SDK 54 app (React Native 0.81.5, Hermes). After upgrading to the latest Expo SDK version we hit a runtime error when rendering `<InstantSearch>`:

```
Error: TypeError: constructor is not callable
Location: Inside useInstantSearchApi when it runs new InstantSearch(props)
```

The core `InstantSearch` class from `instantsearch.js` is not callable as a constructor at runtime.

## Purpose of this repo

- Reproduce the error in a minimal Expo 54 + React InstantSearch setup.
- Help answer:
  1. **Recommended setup for Expo SDK 54 with React InstantSearch** — e.g. Metro resolver settings, or preferring CJS vs ESM builds.
  2. **Compatibility notes** for React InstantSearch with Expo 54 / Reanimated 4 / react-native-worklets.

## Get started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the app:

   ```bash
   npx expo start
   ```

3. Run on iOS or Android (e.g. press `i` or `a` in the terminal, or use a development build). The error should occur when the screen that renders `<InstantSearch>` is shown.

## Tech stack (for reproduction)

- **Expo SDK 54** (React Native 0.81.5, Hermes)
- **React InstantSearch**: `react-instantsearch-core` v7.26.0, `instantsearch.js` 4.90.0
- File-based routing via Expo Router; the relevant screen is under the **app** directory

## Learn more

- [Expo documentation](https://docs.expo.dev/)
- [React InstantSearch](https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/react/)
