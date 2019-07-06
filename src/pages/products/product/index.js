import React from 'react';
import PropTypes from 'prop-types';

import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

import NavigationService from '../../../services/navigation';

const Product = ({ product }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => { NavigationService.navigate('ProductVariants', { productId: product.id }); }}
  >
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={{ uri: product.image_url }} />
    </View>
    <Text style={styles.title}>{product.title}</Text>
  </TouchableOpacity>
);

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    image_url: PropTypes.string,
  }).isRequired,
};

export default Product;
