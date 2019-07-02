import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from './pages/main';
import SignIn from './pages/signin';

const Routes = createAppContainer(
  createStackNavigator(
    {
      SignIn,
      Main,
    },
  ),
);

export default Routes;
