import React, { Component } from 'react';

import { ActivityIndicator, FlatList, View } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CategoriesActions from '../../store/ducks/categories';

import Background from '../../components/background';
import Header from '../../components/header';
import ButtonOrders from '../../components/button/orders';
import ButtonCart from '../../components/button/cart';
import Category from './category';
import styles from './styles';

class Categories extends Component {
  componentDidMount() {
    this.loadCategories();
  }

  loadCategories = () => {
    const { getCategoriesRequest } = this.props;

    getCategoriesRequest();
  };

  renderListItem = ({ item }) => <Category category={item} />;

  renderList = () => {
    const { categories } = this.props;

    return (
      <FlatList
        data={categories.data}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={this.loadCategories}
        refreshing={categories.loading}
      />
    );
  };

  render() {
    const { categories } = this.props;

    return (
      <Background>
        <Header title="Pizzeria Don Juan" ButtonLeft={ButtonOrders} ButtonRight={ButtonCart} />
        <View style={styles.container}>
          {categories.loading
            ? <ActivityIndicator style={styles.loading} />
            : this.renderList()
          }
        </View>
      </Background>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
});

const mapDispatchToProps = dispatch => bindActionCreators(CategoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
