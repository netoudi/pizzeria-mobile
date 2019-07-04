import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from './pages/main';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import Categories from './pages/categories';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Categories,
      SignUp,
      SignIn,
      Main,
    },
  ),
);

export default Routes;
