/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, View, StyleSheet, FlatList} from 'react-native';

import Card from './components/Card';
import productData from './store_data.json';

function App() {
  return (
    <SafeAreaView style={styles.comtainer}>
      <FlatList
        horizontal={false}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
        data={productData}
        renderItem={({item}) => <Card product={item} />}
      />
      <View>
        <Text>Some Text</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  comtainer: {
    flex: 1,
  },
});

export default App;
