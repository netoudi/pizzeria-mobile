import React, { Component } from 'react';

import { ActivityIndicator, FlatList, View } from 'react-native';

import Product from './product';
import styles from './styles';

class Products extends Component {
  state = {
    data: {},
    loading: true,
    refreshing: false,
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = () => {
    this.setState({ refreshing: true });

    const data = {
      'id': 1,
      'title': 'Pizzas',
      'time': '30 mins',
      'description': 'Mais de 50 sabores de pizza em até 4 tamanhos diferentes de fome.',
      'image_url': 'http://192.168.0.145:3333/files/ea7c45b30ffb03d3de1653e2d70153ab.png',
      'products': [
        {
          'id': 1,
          'title': '4 QUEIJOS',
          'image_url': 'http://192.168.0.145:3333/files/00edcf3a7f4ab93d2684651d1920c3b6.jpeg',
        },
        {
          'id': 2,
          'title': '5 QUEIJOS',
          'image_url': 'http://192.168.0.145:3333/files/e7fa228c57f5a97e6609cacd43ac8f61.jpeg',
        },
        {
          'id': 3,
          'title': 'ATUM',
          'image_url': 'http://192.168.0.145:3333/files/a24fdf60eb0de69f01c4fee55e1d862a.jpeg',
        },
        {
          'id': 4,
          'title': 'BACON MILHO',
          'image_url': 'http://192.168.0.145:3333/files/e4bbc5b3d74b95a6ab59d5b7aea99617.jpeg',
        },
        {
          'id': 5,
          'title': 'BANANA CHOCOLATE',
          'image_url': 'http://192.168.0.145:3333/files/9838f079779b3b05b31c28c9b6fd78f9.jpeg',
        },
        {
          'id': 6,
          'title': 'BANANA',
          'image_url': 'http://192.168.0.145:3333/files/e3742358f3a3a0d4bb981cae6d2ec75f.jpeg',
        },
        {
          'id': 7,
          'title': 'BROCOLIS',
          'image_url': 'http://192.168.0.145:3333/files/76bf312b0416dc3d4e453b9d1e85e380.jpeg',
        },
        {
          'id': 8,
          'title': 'CALABRESA',
          'image_url': 'http://192.168.0.145:3333/files/5e99ce1a30d7f65a77d48579e6d1e65a.jpeg',
        },
        {
          'id': 9,
          'title': 'CALIFORNIA',
          'image_url': 'http://192.168.0.145:3333/files/7e7ab927af39ad64719fd56ab04a9028.jpeg',
        },
        {
          'id': 10,
          'title': 'CAPRICIO',
          'image_url': 'http://192.168.0.145:3333/files/4a182d42abb5682b72a563f7dc51ac1c.jpeg',
        },
        {
          'id': 11,
          'title': 'CHOCO CONFETTI',
          'image_url': 'http://192.168.0.145:3333/files/5587c33adf7996dffb41f955e0c99f7f.jpeg',
        },
        {
          'id': 12,
          'title': 'CUPIM NO ALHO',
          'image_url': 'http://192.168.0.145:3333/files/70e8a62cb1d050ef4b49dabcb72c48c0.jpeg',
        },
        {
          'id': 13,
          'title': 'ESCAROLA',
          'image_url': 'http://192.168.0.145:3333/files/6ae71c43453c78ea2628ae35774bd51c.jpeg',
        },
        {
          'id': 14,
          'title': 'ESPANHOLA',
          'image_url': 'http://192.168.0.145:3333/files/d9d61b61f6c89726139c70a1a86ba3c1.jpeg',
        },
        {
          'id': 15,
          'title': 'FAMILIA',
          'image_url': 'http://192.168.0.145:3333/files/e99f1e27b3931e29d33d57bebbacf175.jpeg',
        },
      ],
    };

    this.setState({
      data,
      loading: false,
      refreshing: false,
    });
  };

  renderListItem = ({ item }) => <Product product={item} />;

  renderList = () => {
    const { data, refreshing } = this.state;

    return (
      <FlatList
        data={data.products}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={this.loadProducts}
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

export default Products;
