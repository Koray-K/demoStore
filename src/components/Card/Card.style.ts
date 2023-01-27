import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    height: 250,
    width: 250,
    backgroundColor: 'white',
    padding: 20,
    paddingRight: 0,
    borderStyle: 'solid',
  },
  productContainer: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
  },
  image: {
    flex: 1,
    height: 150,
    width: 150,
    padding: 10,
    borderRadius: 20,
    marginRight: 30,
    alignContent: 'center',
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
