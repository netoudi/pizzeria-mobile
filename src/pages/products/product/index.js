import React from 'react';
import PropTypes from 'prop-types';

import { Image, Text, View } from 'react-native';
import styles from './styles';

const Product = ({ product }) => (
  <View style={styles.container}>
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={{ uri: product.image_url }} />
    </View>
    <Text style={styles.title}>{product.title}</Text>
  </View>
);

Product.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    image_url: PropTypes.string,
  }).isRequired,
};

export default Product;
