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
import Senzori from '../../SenzoriAction';

const moment = require('moment');
const conometruIcon = require('../../assets/icons/stopwatch.png');
const walkIcon = require('../../assets/icons/walk.png');
const runIcon = require('../../assets/icons/run.png');
const bicycleIcon = require('../../assets/icons/bicycle.png');
const heartIcon = require('../../assets/icons/heart.png');
const indicatorsIcon = require('../../assets/icons/indicators.png');
const ecgIcon = require('../../assets/icons/puls.png');
const ecgImage = require('../../assets/icons/ekg.png');
const playImage = require('../../assets/icons/playIcon.png');

const HomeScreen = () => {
  let pulsInterval, saturatieInterval;
  const [displayParametri, setDisplayParametri] = useState(false);
  const [startPlimbare, setStartPlimbare] = useState(false);
  const [startAlergare, setStartAlergare] = useState(false);
  const [startCiclism, setStartCiclism] = useState(false);
  const [puls, setPuls] = useState(70);
  const [satOxigen, setSatOxigen] = useState(99);
  const [date, setDate] = useState(moment().format('LLLL'));

  const timeInterval = setInterval(
    () => setDate(moment().format('LLLL')),
    1000,
  );

  useEffect(() => {
    return () => clearInterval(timeInterval);
  }, []);

  useEffect(() => {
    if (displayParametri) {
      pulsInterval = setInterval(() => {
        const senzorPuls = Senzori.pulsReader();
        setPuls(senzorPuls);
      }, 10000);
      saturatieInterval = setInterval(() => {
        const senzorOxigen = Senzori.saturatieReader();
        setSatOxigen(senzorOxigen);
      }, 30000);
    }
    if (!displayParametri) {
      clearInterval(pulsInterval);
      clearInterval(saturatieInterval);
    }
  }, [displayParametri]);

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
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
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
                time={30}
                iconRun={startPlimbare ? conometruIcon : playImage}
                iconSport={walkIcon}
                onPress={() => setStartPlimbare(!startPlimbare)}
                startTimer={startPlimbare}
              />
              <SportsContainer
                title="Alergare"
                time={30}
                iconRun={startAlergare ? conometruIcon : playImage}
                iconSport={runIcon}
                onPress={() => setStartAlergare(!startAlergare)}
                startTimer={startAlergare}
              />
              <SportsContainer
                title="Ciclism"
                time={30}
                styleIconSport={styles.iconBicycle}
                iconRun={startCiclism ? conometruIcon : playImage}
                iconSport={bicycleIcon}
                onPress={() => setStartCiclism(!startCiclism)}
                startTimer={startCiclism}
              />
              <View style={styles.containerParametri}>
                <Text style={styles.titleParametri}>Parametri biologici</Text>
                {displayParametri && (
                  <View style={styles.contentParametri}>
                    <ParameterContainer
                      iconParametru={heartIcon}
                      parametru1="Puls"
                      parametru2="Saturatie Oxigen"
                      valueParametru1={`${puls} BPM`}
                      valueParametru2={`${satOxigen} %`}
                      onPress={() => {}}
                    />
                    <ParameterContainer
                      iconParametru={indicatorsIcon}
                      styleIconParametru={styles.indicatorsIcon}
                      parametru1="Temperatura"
                      parametru2="Umiditate"
                      valueParametru1="24 C"
                      valueParametru2="22 %"
                      onPress={() => {}}
                    />
                    <ParameterContainer
                      iconParametru={ecgIcon}
                      styleIconParametru={styles.ecgIcon}
                      parametru1="ECG"
                      iconECG={ecgImage}
                      styleImageParametru={styles.ecgImage}
                      onPress={() => {}}
                    />
                  </View>
                )}
                <Button
                  title={
                    displayParametri ? 'Opreste NemoBit' : 'Activeaza NemoBit'
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
