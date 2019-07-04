import React, { Component } from 'react';

import { ActivityIndicator, FlatList, View } from 'react-native';

import Item from './item';
import Footer from './footer';
import styles from './styles';

class Cart extends Component {
  state = {
    data: {},
    loading: true,
    refreshing: false,
  };

  componentDidMount() {
    this.loadCart();
  }

  loadCart = () => {
    this.setState({ refreshing: true });

    const data = {
      'description': 'description...',
      'address': {
        'zipcode': '00000000',
        'street': 'street...',
        'number': '000',
        'neighborhood': 'neighborhood...',
        'city': 'city...',
        'state': 'state...',
      },
      'items': [
        {
          'id': 1,
          'title': '4 QUEIJOS / Grande',
          'description': 'MOLHO DE TOMATE, MUCARELA, PROVOLONE, PARMESAO, CATUPIRY E OREGANO',
          'image_url': 'http://192.168.0.145:3333/files/00edcf3a7f4ab93d2684651d1920c3b6.jpeg',
          'variant_id': 5,
          'quantity': 1,
          'value_unitary': 68.9,
          'value_total': 68.9,
        },
        {
          'id': 2,
          'title': '4 QUEIJOS / Grande',
          'description': 'MOLHO DE TOMATE, MUCARELA, PROVOLONE, PARMESAO, CATUPIRY E OREGANO',
          'image_url': 'http://192.168.0.145:3333/files/00edcf3a7f4ab93d2684651d1920c3b6.jpeg',
          'variant_id': 5,
          'quantity': 1,
          'value_unitary': 68.9,
          'value_total': 68.9,
        },
        {
          'id': 3,
          'title': '4 QUEIJOS / Grande',
          'description': 'MOLHO DE TOMATE, MUCARELA, PROVOLONE, PARMESAO, CATUPIRY E OREGANO',
          'image_url': 'http://192.168.0.145:3333/files/00edcf3a7f4ab93d2684651d1920c3b6.jpeg',
          'variant_id': 5,
          'quantity': 1,
          'value_unitary': 68.9,
          'value_total': 68.9,
        },
        {
          'id': 4,
          'title': '4 QUEIJOS / Grande',
          'description': 'MOLHO DE TOMATE, MUCARELA, PROVOLONE, PARMESAO, CATUPIRY E OREGANO',
          'image_url': 'http://192.168.0.145:3333/files/00edcf3a7f4ab93d2684651d1920c3b6.jpeg',
          'variant_id': 5,
          'quantity': 1,
          'value_unitary': 68.9,
          'value_total': 68.9,
        },
        {
          'id': 5,
          'title': '4 QUEIJOS / Grande',
          'description': 'MOLHO DE TOMATE, MUCARELA, PROVOLONE, PARMESAO, CATUPIRY E OREGANO',
          'image_url': 'http://192.168.0.145:3333/files/00edcf3a7f4ab93d2684651d1920c3b6.jpeg',
          'variant_id': 5,
          'quantity': 1,
          'value_unitary': 68.9,
          'value_total': 68.9,
        },
        {
          'id': 6,
          'title': '4 QUEIJOS / Grande',
          'description': 'MOLHO DE TOMATE, MUCARELA, PROVOLONE, PARMESAO, CATUPIRY E OREGANO',
          'image_url': 'http://192.168.0.145:3333/files/00edcf3a7f4ab93d2684651d1920c3b6.jpeg',
          'variant_id': 5,
          'quantity': 1,
          'value_unitary': 68.9,
          'value_total': 68.9,
        },
      ],
      'number_items': 6,
      'value_total': 267.6,
    };

    this.setState({
      data,
      loading: false,
      refreshing: false,
    });
  };

  renderListItem = ({ item }) => <Item item={item} />;

  renderList = () => {
    const { data, refreshing } = this.state;

    return (
      <FlatList
        ListFooterComponent={<Footer buttonMore={() => {}} buttonNext={() => {}} />}
        data={data.items}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={this.loadCart}
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

export default Cart;
