import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './Card.style';

type productProps = {
  product: any;
};

const Card = ({product}: productProps) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.productContainer}>
        <Image style={styles.image} source={{uri: product.imgURL}} />
        <Text style={styles.productTitle}>{product.title}</Text>
      </View>
    </View>
  );
};

export default Card;
