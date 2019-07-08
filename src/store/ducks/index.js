import { combineReducers } from 'redux';
import { toastReducer as toast } from 'react-native-redux-toast';

import { reducer as auth } from './auth';
import { reducer as categories } from './categories';
import { reducer as products } from './products';
import { reducer as productVariants } from './product-variants';
import { reducer as cart } from './cart';
import { reducer as orders } from './orders';

export default combineReducers({
  toast,
  auth,
  categories,
  products,
  productVariants,
  cart,
  orders,
});
