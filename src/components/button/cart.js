import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import NavigationService from '../../services/navigation';

const ButtonCart = ({ hasItem }) => (
  <TouchableOpacity
    onPress={() => { NavigationService.navigate('Cart'); }}
    style={{ position: 'relative' }}
  >
    <View style={{
      width: 32,
      height: 32,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 16,
      backgroundColor: '#e81237',
    }}
    >
      <Icon name="shopping-basket" size={14} style={{ color: '#fff' }} />
    </View>

    {hasItem && (
      <View style={{
        width: 10,
        height: 10,
        position: 'absolute',
        top: 0,
        right: 0,
        borderRadius: 5,
        backgroundColor: '#ffb913',
      }}
      />
    )}
  </TouchableOpacity>
);

ButtonCart.propTypes = {
  hasItem: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  hasItem: !!state.cart.data.number_items,
});

export default connect(mapStateToProps)(ButtonCart);
