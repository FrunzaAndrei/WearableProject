import React, {useEffect, useState} from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import colors from '../../colors';
import SportsContainer from '../../components/SportsContainer';
import Button from '../../components/Button';
import ParameterContainer from '../../components/ParameterContainer';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

const moment = require('moment');
const conometruIcon = require('../../assets/icons/stopwatch.png');
const walkIcon = require('../../assets/icons/walk.png');
const runIcon = require('../../assets/icons/run.png');
const bicycleIcon = require('../../assets/icons/bicycle.png');
const heartIcon = require('../../assets/icons/heart.png');
const indicatorsIcon = require('../../assets/icons/indicators.png');
const ecgIcon = require('../../assets/icons/puls.png');
const ecgImage = require('../../assets/icons/ekg.png');

const HomeScreen = () => {
  const [displayParametri, setDisplayParametri] = useState(false);
  const [date, setDate] = useState(moment().format('LLLL'));
  const timeInterval = setInterval(
    () => setDate(moment().format('LLLL')),
    1000,
  );

  useEffect(() => {
    return () => clearInterval(timeInterval);
  }, []);

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.background}
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
            <View style={styles.containerHeader}>
              <Text style={styles.textData}>{date}</Text>
            </View>
            <View style={styles.containerContent}>
              <Text style={styles.titleExercitii}> Exercitii </Text>
              <SportsContainer
                title="Plimbare"
                timeRunning={30}
                time={30}
                iconRun={conometruIcon}
                iconSport={walkIcon}
              />
              <SportsContainer
                title="Alergare"
                timeRunning={30}
                time={30}
                iconRun={conometruIcon}
                iconSport={runIcon}
              />
              <SportsContainer
                title="Ciclism"
                timeRunning={30}
                time={30}
                styleIconSport={styles.iconBicycle}
                iconRun={conometruIcon}
                iconSport={bicycleIcon}
              />
              <View style={styles.containerParametri}>
                <Text style={styles.titleParametri}>Parametri biologici</Text>
                {displayParametri && (
                  <View style={styles.contentParametri}>
                    <ParameterContainer
                      iconParametru={heartIcon}
                      parametru1="Puls"
                      parametru2="Saturatie Oxigen"
                      valueParametru1="70BPM"
                      valueParametru2="90 %"
                    />
                    <ParameterContainer
                      iconParametru={indicatorsIcon}
                      styleIconParametru={styles.indicatorsIcon}
                      parametru1="Temperatura"
                      parametru2="Umiditate"
                      valueParametru1="36 C"
                      valueParametru2="30 %"
                    />
                    <ParameterContainer
                      iconParametru={ecgIcon}
                      styleIconParametru={styles.ecgIcon}
                      parametru1="ECG"
                      iconECG={ecgImage}
                      styleImageParametru={styles.ecgImage}
                    />
                  </View>
                )}
                <Button
                  title={
                    displayParametri ? 'Opreste NemoBitul' : 'Activeaza NemoBit'
                  }
                  onPress={() => setDisplayParametri(!displayParametri)}
                />
                <View style={styles.footer} />
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  containerScroll: {
    flex: 1,
    paddingVertical: 30,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
  },
  containerHeader: {
    alignSelf: 'center',
    marginVertical: 10,
  },
  textData: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  titleExercitii: {
    marginTop: 15,
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconBicycle: {
    width: 38,
  },
  containerParametri: {
    flex: 1,
    marginHorizontal: 40,
    marginTop: 20,
  },
  titleParametri: {
    marginTop: 15,
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  indicatorsIcon: {
    height: 60,
    width: 60,
    marginLeft: 5,
    marginVertical: 0,
  },
  ecgIcon: {
    marginVertical: 0,
    height: 60,
    width: 80,
    marginLeft: 0,
  },
  ecgImage: {
    width: 150,
    height: 60,
    marginVertical: 4,
  },
  footer: {
    height: 60,
  },
});

export default HomeScreen;
