import React from 'react';
import PropTypes from 'prop-types';

import { Image, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

const Header = ({ product }) => (
  <View style={styles.container}>
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={{ uri: product.image_url }} />
    </View>

    <View style={styles.infoContainer}>
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.description}>{product.description}</Text>
      {product.time && (
        <View style={styles.time}>
          <Icon name="timer" size={12} style={styles.timeIcon} />
          <Text style={styles.timeText}>{product.time}</Text>
        </View>
      )}
    </View>
  </View>
);

Header.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    time: PropTypes.string,
    image_url: PropTypes.string,
  }).isRequired,
};

export default Header;
