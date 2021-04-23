import React from 'react';
import 'react-native-gesture-handler';
import AppContainer from './navigation/navigation';
import NavigatorHelper from './navigation/navigationHelper';

const App = () => {
  return (
    <AppContainer
      ref={navigatorRef => {
        NavigatorHelper.setTopLevelNavigator(navigatorRef);
      }}
    />
  );
};

export default App;
