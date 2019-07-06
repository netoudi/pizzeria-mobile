import { call, put } from 'redux-saga/effects';
import { ToastActionsCreators } from 'react-native-redux-toast';

import api from '../../services/api';

import ProductsActions from '../ducks/products';

export function* getProducts({ categoryId }) {
  try {
    const response = yield call(api.get, `categories/${categoryId}`);

    yield put(ProductsActions.getProductsSuccess(response.data));
  } catch (err) {
    yield put(ProductsActions.getProductsFailure(err));
    yield put(ToastActionsCreators.displayError('Erro ao carregar os dados'));
  }
}
