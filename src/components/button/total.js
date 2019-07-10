import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { connect } from 'react-redux';

const formatMoney = (value) => {
  const amount = (value).toFixed(2)
    .replace(/\./g, ',')
    .replace(/\d(?=(\d{3})+,)/g, '$&.');

  return `R$ ${amount}`;
};

const ButtonCartTotal = ({ valueTotal }) => (
  <Text style={{
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  }}
  >
    {valueTotal !== 0 ? formatMoney(valueTotal) : null}
  </Text>
);

ButtonCartTotal.propTypes = {
  valueTotal: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  valueTotal: state.cart.data.value_total,
});

export default connect(mapStateToProps)(ButtonCartTotal);
