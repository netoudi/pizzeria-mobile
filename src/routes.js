import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from './pages/main';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import Categories from './pages/categories';
import Products from './pages/products';
import ProductVariants from './pages/product-variants';
import Cart from './pages/cart';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Cart,
      ProductVariants,
      Products,
      Categories,
      SignUp,
      SignIn,
      Main,
    },
  ),
);

export default Routes;
