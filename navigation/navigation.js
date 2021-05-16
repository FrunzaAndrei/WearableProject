import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import colors from '../colors';
import AlertScreen from '../screens/AlertScreen/AlertScreen';
import AuthenticationScreen from '../screens/Auth/AuthenticationScreen';
import InregistreazateScreen from '../screens/Auth/InregistreazateScreen';
import LandingScreen from '../screens/Auth/LandingScreen';
import HomeScreen from '../screens/Main/HomeScreen';
import commonStyle from '../screens/utils/commonStyle';
import TabBarNavigator from './tabBarNavigation';

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
      headerTitle: null,
      headerStyle: commonStyle.headerStyle,
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

const AlertScreenNavigation = createStackNavigator({
  AlertScreen: {
    screen: AlertScreen,
    navigationOptions: {
      headerTitle: null,
      headerStyle: commonStyle.headerStyle,
    },
  },
});

const RootStack = createStackNavigator(
  {
    /* your routes here */
    LandingScreen: FirstScreen,
    AuthNavigation: AuthNavigation,
    AlertScreenNavigation: AlertScreenNavigation,
    TabBarNavigator: TabBarNavigator,
  },
  {
    // initialRouteName: 'LandingScreen',
    headerMode: 'none',
    mode: 'modal',
  },
);
const AppContainer = createAppContainer(RootStack);

// Now AppContainer is the main component for React to render
export default AppContainer;
