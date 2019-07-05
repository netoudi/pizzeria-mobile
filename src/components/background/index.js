import React from 'react';
import PropTypes from 'prop-types';

import { ImageBackground } from 'react-native';

import styles from './styles';

const Background = ({ children }) => (
  <ImageBackground
    source={require('../../assets/images/header-background.png')}
    style={styles.container}
  >
    {children}
  </ImageBackground>
);

Background.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Background;
