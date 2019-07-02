import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Reactotron from '../config/ReactotronConfig';

import reducers from './ducks';
import sagas from './sagas';

const middleware = [];

const sagaMonitor = Reactotron.createSagaMonitor();
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middleware.push(sagaMiddleware);

const store = createStore(
  reducers,
  compose(applyMiddleware(...middleware), Reactotron.createEnhancer()),
);

sagaMiddleware.run(sagas);

export default store;
