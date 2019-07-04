import React, { Component } from 'react';

import { ActivityIndicator, FlatList, View } from 'react-native';

import Category from './category';
import styles from './styles';

class Categories extends Component {
  state = {
    data: [],
    loading: true,
    refreshing: false,
  };

  componentDidMount() {
    this.loadCategories();
  }

  loadCategories = () => {
    this.setState({ refreshing: true });

    const data = [
      {
        'id': 1,
        'title': 'Pizzas',
        'time': '30 mins',
        'description': 'Mais de 50 sabores de pizza em até 4 tamanhos diferentes de fome.',
        'image_url': 'http://192.168.0.145:3333/files/ea7c45b30ffb03d3de1653e2d70153ab.png',
      },
      {
        'id': 2,
        'title': 'Massas',
        'time': '25 mins',
        'description': '10 tipos de massas com diferentes molhos para te satisfazer.',
        'image_url': 'http://192.168.0.145:3333/files/19350bb322ff632c81ac87261c0f74dc.png',
      },
      {
        'id': 3,
        'title': 'Calzones',
        'time': '15 mins',
        'description': 'Calzones super recheados com mais de 50 sabores diferentes.',
        'image_url': 'http://192.168.0.145:3333/files/6263e06840b961ffa4a273447ecc8c34.png',
      },
      {
        'id': 4,
        'title': 'Bebidas não-alcóolicas',
        'time': null,
        'description': 'Refrigerantes, sucos, chá gelado, energéticos e água.',
        'image_url': 'http://192.168.0.145:3333/files/6febe5068571dbf2e9e1819774927699.png',
      },
      {
        'id': 5,
        'title': 'Bebidas alcóolicas',
        'time': null,
        'description': 'Cervejas artesanis, vinhos e destilados.',
        'image_url': 'http://192.168.0.145:3333/files/b518856c55626886aa857bf5b37a9943.png',
      },
    ];

    this.setState({
      data,
      loading: false,
      refreshing: false,
    });
  };

  renderListItem = ({ item }) => <Category category={item} />;

  renderList = () => {
    const { data, refreshing } = this.state;

    return (
      <FlatList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={this.loadCategories}
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

export default Categories;
