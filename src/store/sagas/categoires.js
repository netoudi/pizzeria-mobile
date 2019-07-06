import { call, put } from 'redux-saga/effects';
import { ToastActionsCreators } from 'react-native-redux-toast';

import api from '../../services/api';

import CategoriesActions from '../ducks/categories';

export function* getCategories() {
  try {
    const response = yield call(api.get, 'categories');

    yield put(CategoriesActions.getCategoriesSuccess(response.data));
  } catch (err) {
    yield put(CategoriesActions.getCategoriesFailure(err));
    yield put(ToastActionsCreators.displayError('Erro ao carregar os dados'));
  }
}
