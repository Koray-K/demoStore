import React from 'react';
import {TextInput, Text, StyleSheet, View, Dimensions} from 'react-native';

const Header = () => {
  return (
    <View>
      <Text style={styles.header}>Demo Store</Text>
      <TextInput style={styles.searchBar}>Ara...</TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 8,
  },
  searchBar: {
    width: Dimensions.get('window').width / 1.1,
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

export default Header;
