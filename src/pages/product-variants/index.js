import React, { Component } from 'react';

import { ActivityIndicator, FlatList, View } from 'react-native';

import Header from './header';
import Product from './product';
import styles from './styles';

class ProductVariants extends Component {
  state = {
    data: {},
    loading: true,
    refreshing: false,
  };

  componentDidMount() {
    this.loadProductVariants();
  }

  loadProductVariants = () => {
    this.setState({ refreshing: true });

    const data = {
      'id': 1,
      'title': '4 QUEIJOS',
      'description': 'MOLHO DE TOMATE, MUCARELA, PROVOLONE, PARMESAO, CATUPIRY E OREGANO',
      'time': '30 mins',
      'image_url': 'http://192.168.0.145:3333/files/00edcf3a7f4ab93d2684651d1920c3b6.jpeg',
      'variants': [
        {
          'id': 1,
          'title': 'Grande',
          'price': 69.9,
          'image_url': null,
        },
        {
          'id': 2,
          'title': 'Media',
          'price': 67.9,
          'image_url': null,
        },
        {
          'id': 3,
          'title': 'Pequena',
          'price': 63.9,
          'image_url': null,
        },
        {
          'id': 3,
          'title': 'Gigante',
          'price': 75.97,
          'image_url': null,
        },
      ],
    };

    this.setState({
      data,
      loading: false,
      refreshing: false,
    });
  };

  sortPriceDesc = (a, b) => b.price - a.price;

  renderListItem = ({ item }) => <Product product={item} />;

  renderList = () => {
    const { data, refreshing } = this.state;

    return (
      <FlatList
        ListHeaderComponent={<Header product={data} />}
        data={data.variants.sort(this.sortPriceDesc)}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={this.loadProductVariants}
        refreshing={refreshing}
        numColumns="2"
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

export default ProductVariants;
