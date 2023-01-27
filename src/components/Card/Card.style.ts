import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    height: Dimensions.get('window').height / 3.7,
    width: Dimensions.get('window').width / 2.3,
    backgroundColor: 'white',
    borderStyle: 'solid',
    gap: 10,
    margin: 5,
    borderRadius: 10,
  },
  productContainer: {
    flexDirection: 'column',
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 170,
    width: 130,
    borderRadius: 20,
    paddingLeft: 30,
    flexWrap: 'wrap',
    resizeMode: 'contain',
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
    justifyContent: 'flex-end',
  },
});

export default styles;
