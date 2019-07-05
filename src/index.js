import React from 'react';
import { Provider } from 'react-redux';
import { Toast } from 'react-native-redux-toast';
import './config/StatusBarConfig';

import Routes from './routes';
import store from './store';

store.dispatch({
  type: 'example/request',
  payload: {
    message: 'Hello world!',
  },
});

const App = () => (
  <Provider store={store}>
    <Routes />
    <Toast />
  </Provider>
);

export default App;
