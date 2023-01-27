import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    borderStyle: 'solid',
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  productContainer: {
    flexDirection: 'column',
    backgroundColor: '#e0e0e0',
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2.3,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: Dimensions.get('window').height / 8,
    width: Dimensions.get('window').width / 4,
    borderRadius: 20,
    paddingLeft: 30,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  productPrice: {
    color: '#6495ed',
    fontSize: 12,
    textAlign: 'right',
  },
});

export default styles;
