import React from 'react';
import PropTypes from 'prop-types';

import { Text, View } from 'react-native';

import styles from './styles';

const Header = ({ description, address }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Endereço de entrega:</Text>
    <Text style={styles.description}>{`${address.street}, ${address.number}`}</Text>
    <Text style={styles.description}>{address.neighborhood}</Text>
    <Text style={styles.description}>{address.zipcode}</Text>

    <Text style={styles.description} />

    <Text style={styles.title}>Observação:</Text>
    <Text>{description}</Text>
  </View>
);

Header.propTypes = {
  description: PropTypes.string,
  address: PropTypes.shape({
    zipcode: PropTypes.string,
    street: PropTypes.string,
    number: PropTypes.string,
    neighborhood: PropTypes.string,
  }).isRequired,
};

Header.defaultProps = {
  description: null,
};

export default Header;
