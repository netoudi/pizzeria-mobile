import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

const reactotron = Reactotron
  .configure({ host: process.env.REACT_APP_HOST || '192.168.0.102' })
  .useReactNative()
  .use(reactotronRedux())
  .use(sagaPlugin())
  .connect();

export default reactotron;
