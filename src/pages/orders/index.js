import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ActivityIndicator, FlatList, View } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import OrdersActions from '../../store/ducks/orders';

import Background from '../../components/background';
import Header from '../../components/header';
import Order from './order';
import styles from './styles';

class Orders extends Component {
  static propTypes = {
    getOrdersRequest: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { getOrdersRequest } = this.props;

    getOrdersRequest();
  }

  renderListItem = ({ item }) => <Order order={item} />;

  renderList = () => {
    const { orders, getOrdersRequest } = this.props;

    return (
      <FlatList
        data={orders.data}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={getOrdersRequest}
        refreshing={orders.loading}
      />
    );
  };

  render() {
    const { orders } = this.props;

    return (
      <Background>
        <Header title="Pizzeria Don Juan" />
        <View style={styles.container}>
          {orders.loading
            ? <ActivityIndicator style={styles.loading} />
            : this.renderList()
          }
        </View>
      </Background>
    );
  }
}

const mapStateToProps = state => ({
  orders: state.orders,
});

const mapDispatchToProps = dispatch => bindActionCreators(OrdersActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
