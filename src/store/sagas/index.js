import { all, put, takeLatest } from 'redux-saga/effects';

function* messageUpperCase(action) {
  yield put({
    type: 'example/success',
    payload: {
      message: action.payload.message.toUpperCase(),
    },
  });
}

export default function* rootSaga() {
  return yield all([
    takeLatest('example/request', messageUpperCase),
  ]);
}
