import { call, put } from 'redux-saga/effects';
import { ToastActionsCreators } from 'react-native-redux-toast';

import api from '../../services/api';

import ProductVariantsActions from '../ducks/product-variants';

export function* getProductVariants({ productId }) {
  try {
    const response = yield call(api.get, `products/${productId}`);

    const sortPriceDesc = (a, b) => b.price - a.price;
    response.data.variants = response.data.variants.sort(sortPriceDesc);

    yield put(ProductVariantsActions.getProductVariantsSuccess(response.data));
  } catch (err) {
    yield put(ProductVariantsActions.getProductVariantsFailure(err));
    yield put(ToastActionsCreators.displayError('Erro ao carregar os dados'));
  }
}
