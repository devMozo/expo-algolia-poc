import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { InstantSearch } from "react-instantsearch-core";
import { ALGOLIA_INDEX_NAME } from '@/constants/algolia';
import { ALGOLIA_SEARCH_API_KEY } from '@/constants/algolia';
import { ALGOLIA_APP_ID } from '@/constants/algolia';
import { algoliasearch } from 'algoliasearch';

const searchClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_SEARCH_API_KEY);

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome to the Algolia POC!</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <InstantSearch searchClient={searchClient} indexName={ALGOLIA_INDEX_NAME}>
          <ThemedText type="subtitle">InstantSearch example</ThemedText>
        </InstantSearch>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
