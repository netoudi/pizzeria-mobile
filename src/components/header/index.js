import React from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';

import { Text, View } from 'react-native';

import styles from './styles';

const Header = ({ navigation, title, ButtonLeft, ButtonRight }) => (
  <View style={styles.container}>
    <View style={styles.left}>
      {ButtonLeft && (
        <ButtonLeft navigation={navigation} />
      )}
    </View>

    <Text style={styles.title}>{title}</Text>

    <View style={styles.right}>
      {ButtonRight && (
        <ButtonRight navigation={navigation} />
      )}
    </View>
  </View>
);

Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  title: PropTypes.string,
  ButtonLeft: PropTypes.func,
  ButtonRight: PropTypes.func,
};

Header.defaultProps = {
  title: null,
  ButtonLeft: null,
  ButtonRight: null,
};

export default withNavigation(Header);
