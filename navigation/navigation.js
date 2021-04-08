import {createStackNavigator} from '@react-navigation/stack';
import AuthScreen from '../screens/AuthScreen';

export default createStackNavigator(
  {
    AuthenticationScreen: {
      screen: AuthScreen,
    },
  },
  {
    headerMode: 'float',
  },
);
