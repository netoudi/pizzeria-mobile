import React from 'react';
import PropTypes from 'prop-types';

import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

const Footer = ({ buttonMore, buttonNext }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={buttonMore} style={styles.buttonMore}>
      <Icon name="add-shopping-cart" size={18} style={styles.buttonMoreIcon} />
    </TouchableOpacity>
    <TouchableOpacity onPress={buttonNext} style={styles.buttonNext}>
      <Text style={styles.buttonNextText}>REALIZAR PEDIDO</Text>
      <Icon name="chevron-right" size={18} style={styles.buttonNextIcon} />
    </TouchableOpacity>
  </View>
);

Footer.propTypes = {
  buttonMore: PropTypes.func.isRequired,
  buttonNext: PropTypes.func.isRequired,
};

export default Footer;
