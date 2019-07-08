import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ActivityIndicator, FlatList, View } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CartActions from '../../store/ducks/cart';

import Background from '../../components/background';
import Header from '../../components/header';
import ListHeader from './header';
import ListFooter from './footer';
import Item from './item';
import styles from './styles';

class Checkout extends Component {
  static propTypes = {
    checkoutRequest: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { navigation, cart } = this.props;

    if (cart.data.number_items === 0) {
      navigation.navigate('Cart');
    }
  }

  renderList = () => {
    const { cart, checkoutRequest } = this.props;

    return (
      <FlatList
        ListHeaderComponent={
          <ListHeader description={cart.data.description} address={cart.data.address} />
        }
        ListFooterComponent={<ListFooter buttonNext={checkoutRequest} />}
        data={cart.data.items}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <Item item={item} />}
      />
    );
  };

  render() {
    const { cart } = this.props;

    return (
      <Background>
        <Header title="Pizzeria Don Juan" />
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

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
