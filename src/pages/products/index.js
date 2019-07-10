import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ActivityIndicator, FlatList, View } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductsActions from '../../store/ducks/products';

import Background from '../../components/background';
import Header from '../../components/header';
import ButtonBack from '../../components/button/back';
import Product from './product';
import styles from './styles';

class Products extends Component {
  static propTypes = {
    getProductsRequest: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = () => {
    const { navigation, getProductsRequest } = this.props;
    const categoryId = navigation.getParam('categoryId');

    getProductsRequest(categoryId);
  };

  renderListItem = ({ item }) => <Product product={item} />;

  renderList = () => {
    const { products } = this.props;

    return (
      <FlatList
        data={products.data.products}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={this.loadProducts}
        refreshing={products.loading}
        numColumns="2"
      />
    );
  };

  render() {
    const { products } = this.props;

    return (
      <Background>
        <Header
          title="Selecione um tipo"
          ButtonLeft={() => <ButtonBack routeName="Categories" />}
        />
        <View style={styles.container}>
          {products.loading
            ? <ActivityIndicator style={styles.loading} />
            : this.renderList()
          }
        </View>
      </Background>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProductsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Products);
