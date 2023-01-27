/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  TextInput,
} from 'react-native';

import Card from './components/Card';
import productData from './store_data.json';

function App() {
  return (
    <SafeAreaView style={styles.comtainer}>
      <View style={styles.scrollContainer}>
        <Text>Demo Store</Text>
        <TextInput placeholder="Aramak için tıklayınız!" />
        <FlatList
          horizontal={false}
          numColumns={2}
          keyExtractor={item => item.id.toString()}
          data={productData}
          renderItem={({item}) => <Card product={item} />}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  comtainer: {
    flex: 1,
    width: Dimensions.get('screen').width.toString(),
    flexWrap: 'wrap',
    backgroundColor: 'white',
  },
  scrollContainer: {
    flexWrap: 'wrap',
    width: Dimensions.get('window').width.toString(),
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    fontWeight: '200',
    width: Dimensions.get('window').width.toString(),
    borderStyle: 'solid',
    borderColor: 'black',
  },
});

export default App;
