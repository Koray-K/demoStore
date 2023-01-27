import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
  },
  image: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2,
  },
});

export default styles;
