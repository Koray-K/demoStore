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
    width: Dimensions.get('window').width / 2.3,
    borderRadius: 10,
    padding: 5,
//    justifyContent: 'center',
//    alignItems: 'center',
  },
  image: {
    height: Dimensions.get('window').height / 4,
    width: '100%',
    resizeMode: 'contain',
    borderRadius: 10,
    paddingLeft: 30,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    color: '#6495ed',
    fontSize: 12,
    textAlign: 'right',
  },
  stock: {
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'left',
  },
});

export default styles;
