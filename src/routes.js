import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from './pages/main';
import SignIn from './pages/signin';
import SignUp from './pages/signup';

const Routes = createAppContainer(
  createStackNavigator(
    {
      SignUp,
      SignIn,
      Main,
    },
  ),
);

export default Routes;
