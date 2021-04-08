import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthScreen from './screens/AuthScreen';
import colors from './colors';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.white,
          },
          headerTintColor: colors.black,
          headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf: 'center',
          },
        }}>
        <Stack.Screen
          name="Auth"
          component={AuthScreen}
          options={{title: 'NemoBit'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
