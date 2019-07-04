import React, { Component } from 'react';

import { ActivityIndicator, FlatList, View } from 'react-native';

import Order from './order';
import styles from './styles';

class Orders extends Component {
  state = {
    data: [],
    loading: true,
    refreshing: false,
  };

  componentDidMount() {
    this.loadOrders();
  }

  loadOrders = () => {
    this.setState({ refreshing: true });

    const data = [
      {
        'id': 1,
        'value_total': 99.87,
        'created_at': '2019-07-04 18:38:00',
      },
      {
        'id': 2,
        'value_total': 99.87,
        'created_at': '2019-07-04 18:38:00',
      },
      {
        'id': 3,
        'value_total': 99.87,
        'created_at': '2019-07-04 18:38:00',
      },
      {
        'id': 4,
        'value_total': 99.87,
        'created_at': '2019-07-04 18:38:00',
      },
    ];

    this.setState({
      data,
      loading: false,
      refreshing: false,
    });
  };

  renderListItem = ({ item }) => <Order order={item} />;

  renderList = () => {
    const { data, refreshing } = this.state;

    return (
      <FlatList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={this.loadOrders}
        refreshing={refreshing}
      />
    );
  };

  render() {
    const { loading } = this.state;

    return (
      <View style={styles.container}>
        {loading
          ? <ActivityIndicator style={styles.loading} />
          : this.renderList()
        }
      </View>
    );
  }
}

export default Orders;
