import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import colors from '../../colors';
import MyCalendar from '../../components/Calendar';
import SportsContainer from '../../components/SportsContainer';

const moment = require('moment');
const conometruIcon = require('../../assets/icons/stopwatch.png');
const walkIcon = require('../../assets/icons/walk.png');
const runIcon = require('../../assets/icons/run.png');
const bicycleIcon = require('../../assets/icons/bicycle.png');
const heartIcon = require('../../assets/icons/heart.png');
const indicatorsIcon = require('../../assets/icons/indicators.png');
const ecgIcon = require('../../assets/icons/puls.png');
const ecgImage = require('../../assets/icons/ekg.png');

const CalendarScreen = () => {
  const [date, chooseDate] = useState(null);
  const handleOnSelectDay = date => {
    chooseDate(date);
  };

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.backgroundTabBar}
        translucent={false}
        showHideTransition={'slide'}
      />
      <KeyboardAvoidingView
        style={{flexGrow: 1}}
        contentContainerStyle={{flex: 1}}>
        <ScrollView
          style={styles.containerScroll}
          contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.container}>
            <View style={styles.containerCalendars}>
              <MyCalendar onSelectDay={handleOnSelectDay} />
            </View>
          </View>
          {date && (
            <View style={styles.containerContent}>
              <Text style={styles.title}>{`Activitati ${moment(date).format(
                'L',
              )}`}</Text>
              <View style={styles.sportContainer}>
                <SportsContainer
                  title="Plimbare"
                  timeRunning={30}
                  time={30}
                  iconRun={conometruIcon}
                  iconSport={walkIcon}
                  onPress={() => {}}
                />
                <SportsContainer
                  title="Alergare"
                  timeRunning={30}
                  time={30}
                  iconRun={conometruIcon}
                  iconSport={runIcon}
                  onPress={() => {}}
                />
                <SportsContainer
                  title="Ciclism"
                  timeRunning={30}
                  time={30}
                  styleIconSport={styles.iconBicycle}
                  iconRun={conometruIcon}
                  iconSport={bicycleIcon}
                  onPress={() => {}}
                />
              </View>
            </View>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({
  containerScroll: {
    flex: 1,
    paddingBottom: 30,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
  },
  containerCalendars: {
    marginBottom: 5,
  },
  containerContent: {
    flex: 1,
    marginVertical: 10,
  },
  title: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
