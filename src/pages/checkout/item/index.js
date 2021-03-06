import React from 'react';
import PropTypes from 'prop-types';

import { Image, Text, View } from 'react-native';
import styles from './styles';

const formatMoney = (value) => {
  const amount = (value).toFixed(2)
    .replace(/\./g, ',')
    .replace(/\d(?=(\d{3})+,)/g, '$&.');

  return `R$ ${amount}`;
};

const CartItem = ({ item }) => (
  <View style={styles.container}>
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={{ uri: item.image_url }} />
    </View>

    <View style={styles.infoContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.price}>{formatMoney(item.value_unitary)}</Text>
    </View>
  </View>
);

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    value_unitary: PropTypes.number,
    image_url: PropTypes.string,
  }).isRequired,
};

export default CartItem;
