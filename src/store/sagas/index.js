import { all, takeLatest } from 'redux-saga/effects';

import { init, signIn, signOut, signUp } from './auth';
import { AuthTypes } from '../ducks/auth';

import { getCategories } from './categoires';
import { CategoriesTypes } from '../ducks/categories';

import { getProducts } from './products';
import { ProductsTypes } from '../ducks/products';

export default function* rootSaga() {
  return yield all([
    init(),

    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGN_UP_REQUEST, signUp),
    takeLatest(AuthTypes.SIGN_OUT, signOut),

    takeLatest(CategoriesTypes.GET_CATEGORIES_REQUEST, getCategories),

    takeLatest(ProductsTypes.GET_PRODUCTS_REQUEST, getProducts),
  ]);
}
