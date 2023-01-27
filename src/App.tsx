/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, View, StyleSheet, FlatList} from 'react-native';

import Card from './components/Card';
import productData from './store_data.json';

import Header from './components/Search/Header';

function App() {
  return (
    <SafeAreaView style={styles.comtainer}>
      <View style={styles.scrollContainer}>
        <FlatList
          ListHeaderComponent={() => <Header />}
          horizontal={false}
          numColumns={2}
          keyExtractor={item => item.id.toString()}
          data={productData}
          renderItem={({item}) => <Card product={item} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  comtainer: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 20,
  },
  scrollContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
