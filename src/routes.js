import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from './pages/main';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import Categories from './pages/categories';
import Products from './pages/products';
import ProductVariants from './pages/product-variants';

const Routes = createAppContainer(
  createStackNavigator(
    {
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
