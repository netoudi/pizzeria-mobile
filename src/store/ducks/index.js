import { combineReducers } from 'redux';
import { toastReducer as toast } from 'react-native-redux-toast';

import { reducer as auth } from './auth';
import { reducer as categories } from './categories';
import { reducer as products } from './products';

export default combineReducers({
  toast,
  auth,
  categories,
  products,
});
