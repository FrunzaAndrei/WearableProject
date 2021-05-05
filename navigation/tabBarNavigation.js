import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from '../screens/Main/HomeScreen';
import CalendarScreen from '../screens/Main/CalendarScreen';
import SenzoriScreen from '../screens/Main/SenzoriScreen';
import colors from '../colors';

const senzori = require('../assets/icons/senzori.png');
const senzoriSelected = require('../assets/icons/senzoriFill.png');
const calendar = require('../assets/icons/calendar.png');
const calendarSelected = require('../assets/icons/calendarFill.png');
const home = require('../assets/icons/home.png');
const homeSelected = require('../assets/icons/homeFill.png');

const TabBarNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        tabBarIcon: ({focused}) => {
          return (
            <Image
              resizeMode="contain"
              style={styles.icon}
              source={focused ? homeSelected : home}
            />
          );
        },
        tabBarLabel: 'Acasa',
      }),
    },
    Calendar: {
      screen: CalendarScreen,
      navigationOptions: () => ({
        tabBarIcon: ({focused}) => {
          return (
            <Image
              resizeMode="contain"
              style={styles.icon}
              source={focused ? calendarSelected : calendar}
            />
          );
        },
        tabBarLabel: 'Calendar',
      }),
    },
    Senzori: {
      screen: SenzoriScreen,
      navigationOptions: () => ({
        tabBarIcon: ({focused}) => {
          return (
            <Image
              resizeMode="contain"
              style={styles.icon}
              source={focused ? senzoriSelected : senzori}
            />
          );
        },
        tabBarLabel: 'Senzori',
      }),
    },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'screen',
    tabBarOptions: {
      style: {
        borderTopColor: 'transparent',
        backgroundColor: colors.backgroundTabBar,
        paddingTop: 15,
        height: 60,
      },
      tabStyle: {
        paddingTop: 4,
        borderTopColor: colors.backgroundTabBar,
        borderTopWidth: 1,
      },
      labelStyle: {
        fontWeight: 'bold',
        fontSize: 15,
        paddingTop: 12,
      },
      activeTintColor: colors.background,
      inactiveTintColor: colors.backgroundButton,
    },
  },
);

const styles = StyleSheet.create({
  icon: {
    width: 28,
    height: 28,
  },
});

export default TabBarNavigator;
