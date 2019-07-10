import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NavigationService from '../../services/navigation';

const ButtonBack = ({ routeName, params }) => (
  <TouchableOpacity
    onPress={() => { NavigationService.navigate(routeName, params); }}
    style={{
      width: 32,
      height: 32,
      justifyContent: 'center',
      alignItems: 'flex-start',
      position: 'relative',
    }}
  >
    <Icon
      name="chevron-left"
      size={24}
      style={{
        color: '#fff',
        position: 'absolute',
        left: -7,
      }}
    />
  </TouchableOpacity>
);

ButtonBack.propTypes = {
  routeName: PropTypes.string.isRequired,
  params: PropTypes.oneOf(PropTypes.object),
};

ButtonBack.defaultProps = {
  params: {},
};

export default ButtonBack;
