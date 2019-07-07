import React from 'react';
import PropTypes from 'prop-types';

import { Image, Text, TouchableOpacity, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CartActions from '../../../store/ducks/cart';

import styles from './styles';

const formatMoney = (value) => {
  const amount = (value).toFixed(2)
    .replace(/\./g, ',')
    .replace(/\d(?=(\d{3})+,)/g, '$&.');

  return `R$ ${amount}`;
};

const CartItem = ({ item, delItemRequest }) => (
  <View style={styles.container}>
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={{ uri: item.image_url }} />
    </View>

    <View style={styles.infoContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.price}>{formatMoney(item.value_unitary)}</Text>
    </View>

    <TouchableOpacity
      onPress={() => { delItemRequest(item.id); }}
      style={styles.actionContainer}
    >
      <Icon name="delete-forever" size={18} style={styles.deleteIcon} />
    </TouchableOpacity>
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
  delItemRequest: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(null, mapDispatchToProps)(CartItem);
