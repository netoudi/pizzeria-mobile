import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ActivityIndicator, FlatList, View } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductVariantsActions from '../../store/ducks/product-variants';

import Background from '../../components/background';
import Header from '../../components/header';
import ButtonBack from '../../components/button/back';
import ProductHeader from './header';
import Product from './product';
import styles from './styles';

class ProductVariants extends Component {
  static propTypes = {
    getProductVariantsRequest: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.loadProductVariants();
  }

  loadProductVariants = () => {
    const { navigation, getProductVariantsRequest } = this.props;
    const productId = navigation.getParam('productId');

    getProductVariantsRequest(productId);
  };

  renderListItem = ({ item }) => <Product product={item} />;

  renderList = () => {
    const { productVariants } = this.props;

    return (
      <FlatList
        ListHeaderComponent={<ProductHeader product={productVariants.data} />}
        data={productVariants.data.variants}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={this.loadProductVariants}
        refreshing={productVariants.loading}
        numColumns="2"
      />
    );
  };

  render() {
    const { navigation, productVariants } = this.props;
    const productId = navigation.getParam('productId');

    return (
      <Background>
        <Header
          title="Selecione um tamanho"
          ButtonLeft={() => <ButtonBack routeName="Products" params={{ productId }} />}
        />
        <View style={styles.container}>
          {productVariants.loading
            ? <ActivityIndicator style={styles.loading} />
            : this.renderList()
          }
        </View>
      </Background>
    );
  }
}

const mapStateToProps = state => ({
  productVariants: state.productVariants,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProductVariantsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProductVariants);
