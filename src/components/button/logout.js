import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthActions from '../../store/ducks/auth';

const ButtonLogout = ({ signOut }) => (
  <TouchableOpacity
    onPress={signOut}
    style={{
      width: 32,
      height: 32,
      justifyContent: 'center',
      alignItems: 'flex-end',
    }}
  >
    <Icon name="exit-to-app" size={24} style={{ color: '#fff' }} />
  </TouchableOpacity>
);

ButtonLogout.propTypes = {
  signOut: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(null, mapDispatchToProps)(ButtonLogout);
