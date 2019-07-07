import { all, takeLatest } from 'redux-saga/effects';

import { init, signIn, signOut, signUp } from './auth';
import { AuthTypes } from '../ducks/auth';

import { getCategories } from './categoires';
import { CategoriesTypes } from '../ducks/categories';

import { getProducts } from './products';
import { ProductsTypes } from '../ducks/products';

import { getProductVariants } from './product-variants';
import { ProductVariantsTypes } from '../ducks/product-variants';

import { addInfo, addItem, delItem } from './cart';
import { CartTypes } from '../ducks/cart';

export default function* rootSaga() {
  return yield all([
    init(),

    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGN_UP_REQUEST, signUp),
    takeLatest(AuthTypes.SIGN_OUT, signOut),

    takeLatest(CategoriesTypes.GET_CATEGORIES_REQUEST, getCategories),

    takeLatest(ProductsTypes.GET_PRODUCTS_REQUEST, getProducts),

    takeLatest(ProductVariantsTypes.GET_PRODUCT_VARIANTS_REQUEST, getProductVariants),

    takeLatest(CartTypes.ADD_ITEM_REQUEST, addItem),
    takeLatest(CartTypes.DEL_ITEM_REQUEST, delItem),
    takeLatest(CartTypes.ADD_INFO_REQUEST, addInfo),
  ]);
}
