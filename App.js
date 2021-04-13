import React from 'react';
import 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
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

const styles = StyleSheet.create({});

export default App;
