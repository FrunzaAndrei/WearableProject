import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import AuthenticationScreen from '../screens/Auth/AuthenticationScreen';
import InregistreazateScreen from '../screens/Auth/InregistreazateScreen';
import LandingScreen from '../screens/Auth/LandingScreen';

const AuthNavigation = createStackNavigator({
  AuthenticationScreen: {
    screen: AuthenticationScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  InregistrareScreen: {
    screen: InregistreazateScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
});

const FirstScreen = createStackNavigator({
  LandingScreen: {
    screen: LandingScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
});

const RootStack = createStackNavigator(
  {
    /* your routes here */
    LandingScreen: FirstScreen,
    AuthNavigation: AuthNavigation,
  },
  {
    initialRouteName: 'LandingScreen',
    headerMode: 'none',
    mode: 'modal',
  },
);
const AppContainer = createAppContainer(RootStack);

// Now AppContainer is the main component for React to render
export default AppContainer;
