import { call, put, select } from 'redux-saga/effects';
import { ToastActionsCreators } from 'react-native-redux-toast';

import api from '../../services/api';

import CartActions from '../ducks/cart';

export function* addItem({ variantId }) {
  try {
    const { data: item } = yield call(api.get, `variants/${variantId}`);

    const cart = yield select(state => state.cart.data);

    const newItem = {
      id: (new Date().getTime()),
      title: `${item.product.title} / ${item.title}`,
      description: item.product.description,
      image_url: (item.image_url || item.product.image_url),
      variant_id: item.id,
      quantity: 1,
      value_unitary: item.price,
      value_total: item.price,
    };

    const items = [newItem, ...cart.items];

    const data = {
      ...cart,
      items,
      number_items: items.length,
      value_total: items.reduce((acc, curr) => acc + curr.value_total, 0).toFixed(2),
    };

    yield put(CartActions.addItemSuccess(data));
  } catch (err) {
    yield put(CartActions.addItemFailure(err));
    yield put(ToastActionsCreators.displayError('Não foi possível adicionar o item'));
  }
}

export function* delItem({ itemId }) {
  try {
    const cart = yield select(state => state.cart.data);

    const items = cart.items.filter(i => i.id !== itemId);

    const data = {
      ...cart,
      items,
      number_items: items.length,
      value_total: items.reduce((acc, curr) => acc + curr.value_total, 0).toFixed(2),
    };

    yield put(CartActions.delItemSuccess(data));
  } catch (err) {
    yield put(CartActions.delItemFailure(err));
    yield put(ToastActionsCreators.displayError('Não foi possível remover o item'));
  }
}

export function* addInfo({ description, address }) {
  try {
    const cart = yield select(state => state.cart.data);

    const data = {
      ...cart,
      description,
      address,
    };

    yield put(CartActions.addInfoSuccess(data));
  } catch (err) {
    yield put(CartActions.addInfoFailure(err));
  }
}
