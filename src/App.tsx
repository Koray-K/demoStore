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
  TextInput,
  Dimensions,
} from 'react-native';

import Card from './components/Card';
import productData from './store_data.json';

function App() {
  return (
    <SafeAreaView style={styles.comtainer}>
      <View style={styles.scrollContainer}>
        <Text>Demo Store</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Aramak için tıklayınız!"
        />
        <FlatList
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
  textInput: {
    width: Dimensions.get('window').width,
    fontWeight: '600',
    borderRadius: 20,
    backgroundColor: '#d3d3d3',
    margin: 12,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    textAlign: 'center',
  },
});

export default App;
