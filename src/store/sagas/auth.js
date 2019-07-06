import { call, put } from 'redux-saga/effects';
import { ToastActionsCreators } from 'react-native-redux-toast';
import { AsyncStorage } from 'react-native';

import api from '../../services/api';
import NavigationService from '../../services/navigation';

import AuthActions from '../ducks/auth';

export function* init() {
  const token = yield call([AsyncStorage, 'getItem'], '@PIZZERIA/token');

  if (token) {
    yield put(AuthActions.signInSuccess(token));
  }

  yield put(AuthActions.initCheckSuccess());
}

export function* signIn({ email, password }) {
  try {
    const response = yield call(
      api.post,
      'signin',
      {
        email,
        password,
      },
    );

    yield call([AsyncStorage, 'setItem'], '@PIZZERIA/token', response.data.token.token);

    yield put(AuthActions.signInSuccess(response.data.token.token));

    NavigationService.navigate('Categories');
  } catch (err) {
    yield put(ToastActionsCreators.displayError('Credenciais inválidas'));
  }
}

export function* signUp({ name, email, password }) {
  try {
    const response = yield call(
      api.post,
      'signup',
      {
        name,
        email,
        password,
      },
    );

    yield call([AsyncStorage, 'setItem'], '@PIZZERIA/token', response.data.token.token);

    yield put(AuthActions.signInSuccess(response.data.token.token));

    NavigationService.navigate('Categories');
  } catch (err) {
    yield put(ToastActionsCreators.displayError('Não foi possível cadastrar'));
  }
}

export function* signOut() {
  yield call([AsyncStorage, 'clear']);
}
