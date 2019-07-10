import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ActivityIndicator, FlatList, Text, View } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CartActions from '../../store/ducks/cart';

import Background from '../../components/background';
import Header from '../../components/header';
import ButtonBack from '../../components/button/back';
import ButtonCartTotal from '../../components/button/total';
import Item from './item';
import Footer from './footer';
import styles from './styles';

class Cart extends Component {
  static propTypes = {
    addItemRequest: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { navigation, addItemRequest } = this.props;
    const variantId = navigation.getParam('variantId');

    if (variantId !== undefined) {
      addItemRequest(variantId);
    }
  }

  renderListItem = ({ item }) => <Item item={item} />;

  renderCartFooter = () => {
    const { navigation, cart } = this.props;

    if (cart.data.number_items === 0) {
      return <View />;
    }

    return (
      <Footer
        buttonMore={() => { navigation.navigate('Categories'); }}
        buttonNext={() => { navigation.navigate('Address'); }}
      />
    );
  };

  renderCartEmpty = () => (
    <View style={styles.empty}>
      <Text>Seu carrinho de compras está vazio.</Text>
    </View>
  );

  renderList = () => {
    const { cart } = this.props;

    return (
      <FlatList
        ListFooterComponent={this.renderCartFooter}
        ListEmptyComponent={this.renderCartEmpty}
        data={cart.data.items}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
      />
    );
  };

  render() {
    const { navigation, cart } = this.props;
    const variantId = navigation.getParam('variantId');
    const goBackCategories = <ButtonBack routeName="Categories" />;
    const goBackProductVariants = <ButtonBack routeName="ProductVariants" params={{ variantId }} />;

    return (
      <Background>
        <Header
          title="Carrinho"
          ButtonLeft={() => variantId !== undefined ? goBackProductVariants : goBackCategories}
          ButtonRight={ButtonCartTotal}
        />
        <View style={styles.container}>
          {cart.loading
            ? <ActivityIndicator style={styles.loading} />
            : this.renderList()
          }
        </View>
      </Background>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
