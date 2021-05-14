import React, {useState, useEffect} from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {withNavigationFocus} from 'react-navigation';
import {useSelector} from 'react-redux';
import colors from '../../colors';
import MyCalendar from '../../components/Calendar';
import SportContainerCalendar from '../../components/SportContainerCalendar';

const moment = require('moment');
const conometruIcon = require('../../assets/icons/stopwatch.png');
const checkMark = require('../../assets/icons/checkMark.png');
const walkIcon = require('../../assets/icons/walk.png');
const runIcon = require('../../assets/icons/run.png');
const bicycleIcon = require('../../assets/icons/bicycle.png');
const textCompletActivitate = 'Activitatea este completa';
const textIncompletActivitate = 'Activitate nu este inca completa';

const CalendarScreen = ({isFocused}) => {
  const {counterActivities} = useSelector(state => ({
    counterActivities: state.data.counterActivites,
  }));

  const [plimbareCompleta, setPlimbareCompleted] = useState(false);
  const [alergareCompleta, setAlergareCompleted] = useState(false);
  const [ciclismCompleta, setCiclismCompleted] = useState(false);
  const [date, chooseDate] = useState(null);
  const handleOnSelectDay = date => {
    chooseDate(date);
    console.log(counterActivities);
    reinitializare();
    const formatDate = moment(date).format('L');
    const dataArray = counterActivities.filter(item => item.date == formatDate);
    dataArray.forEach(item => {
      if (item.tipActivitate === 'Alergare') {
        setAlergareCompleted(true);
      }
      if (item.tipActivitate === 'Plimbare') {
        setPlimbareCompleted(true);
      }
      if (item.tipActivitate === 'Ciclism') {
        setCiclismCompleted(true);
      }
    });
  };

  const reinitializare = () => {
    setPlimbareCompleted(false);
    setCiclismCompleted(false);
    setAlergareCompleted(false);
  };

  const textPlimbare = plimbareCompleta
    ? textCompletActivitate
    : textIncompletActivitate;
  const textAlergare = plimbareCompleta
    ? textCompletActivitate
    : textIncompletActivitate;
  const textCiclism = plimbareCompleta
    ? textCompletActivitate
    : textIncompletActivitate;

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
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
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
                <SportContainerCalendar
                  title="Plimbare"
                  timeRunning={30}
                  time={30}
                  iconRun={plimbareCompleta ? checkMark : conometruIcon}
                  iconSport={walkIcon}
                  status={
                    plimbareCompleta
                      ? textCompletActivitate
                      : textIncompletActivitate
                  }
                />
                <SportContainerCalendar
                  title="Alergare"
                  timeRunning={30}
                  time={30}
                  iconRun={alergareCompleta ? checkMark : conometruIcon}
                  iconSport={runIcon}
                  status={
                    alergareCompleta
                      ? textCompletActivitate
                      : textIncompletActivitate
                  }
                />
                <SportContainerCalendar
                  title="Ciclism"
                  timeRunning={30}
                  time={30}
                  styleIconSport={styles.iconBicycle}
                  iconRun={ciclismCompleta ? checkMark : conometruIcon}
                  iconSport={bicycleIcon}
                  status={
                    ciclismCompleta
                      ? textCompletActivitate
                      : textIncompletActivitate
                  }
                />
              </View>
            </View>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

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

export default withNavigationFocus(CalendarScreen);
