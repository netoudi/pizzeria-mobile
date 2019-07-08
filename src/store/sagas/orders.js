import { call, put } from 'redux-saga/effects';
import { ToastActionsCreators } from 'react-native-redux-toast';

import api from '../../services/api';

import OrdersActions from '../ducks/orders';

export function* getOrders() {
  try {
    const response = yield call(api.get, 'orders');

    yield put(OrdersActions.getOrdersSuccess(response.data));
  } catch (err) {
    yield put(OrdersActions.getOrdersFailure(err));
    yield put(ToastActionsCreators.displayError('Erro ao carregar os dados'));
  }
}
