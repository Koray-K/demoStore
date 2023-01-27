/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import Card from './components/Card';

function App() {
  return (
    <SafeAreaView>
      <View>
        <Text>Some Text</Text>
      </View>

      <Card />
    </SafeAreaView>
  );
}

export default App;
