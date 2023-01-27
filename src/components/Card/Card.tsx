import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './Card.style';

type productProps = {
  product: any;
};

const Card = ({product}: productProps) => {
  return (
    <View style={styles.cardContainer}>
      <Image style={styles.image} source={{uri: product.imgURL}} />
      <Text>{product.title}</Text>
    </View>
  );
};

export default Card;
