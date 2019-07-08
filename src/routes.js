import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from './pages/main';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import Categories from './pages/categories';
import Products from './pages/products';
import ProductVariants from './pages/product-variants';
import Cart from './pages/cart';
import Address from './pages/address';
import Orders from './pages/orders';
import Checkout from './pages/checkout';

const createNavigator = (isLoggedIn = false) => (
  createAppContainer(
    createStackNavigator(
      {
        Checkout,
        Orders,
        Address,
        Cart,
        ProductVariants,
        Products,
        Categories,
        SignUp,
        SignIn,
        Main,
      }, {
        headerMode: 'none',
        initialRouteName: isLoggedIn ? 'Categories' : 'SignIn',
      },
    ),
  )
);

export default createNavigator;
