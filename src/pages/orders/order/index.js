import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/pt-br';

import { Text, View } from 'react-native';
import styles from './styles';

moment.locale('pt-BR');

const timeAgo = datetime => moment(datetime, 'YYYY-MM-DD HH:mm:ss').fromNow();

const formatMoney = (value) => {
  const amount = (value).toFixed(2)
    .replace(/\./g, ',')
    .replace(/\d(?=(\d{3})+,)/g, '$&.');

  return `R$ ${amount}`;
};

const Order = ({ order }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{`Pedido #${order.id}`}</Text>
    <Text style={styles.description}>{timeAgo(order.created_at)}</Text>
    <Text style={styles.price}>{formatMoney(order.value_total)}</Text>
  </View>
);

Order.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number,
    created_at: PropTypes.string,
    value_total: PropTypes.number,
  }).isRequired,
};

export default Order;
