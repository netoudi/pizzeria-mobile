import React from 'react';
import PropTypes from 'prop-types';

import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

const Footer = ({ buttonNext }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={buttonNext} style={styles.buttonNext}>
      <Text style={styles.buttonNextText}>FINALIZAR</Text>
      <Icon name="chevron-right" size={18} style={styles.buttonNextIcon} />
    </TouchableOpacity>
  </View>
);

Footer.propTypes = {
  buttonNext: PropTypes.func.isRequired,
};

export default Footer;
