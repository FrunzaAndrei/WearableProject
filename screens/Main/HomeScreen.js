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
import SportsContainer from '../../components/SportsContainer';
import Button from '../../components/Button';

const conometruIcon = require('../../assets/icons/stopwatch.png');
const walkIcon = require('../../assets/icons/walk.png');
const runIcon = require('../../assets/icons/run.png');
const bicycleIcon = require('../../assets/icons/bicycle.png');

const HomeScreen = () => {
  const [displayParametri, setDisplayParametri] = useState(false);

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.background}
        translucent={false}
        showHideTransition={'slide'}
      />
      <KeyboardAvoidingView style={{flexGrow: 1}}>
        <ScrollView
          style={styles.containerScroll}
          contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.container}>
            <View style={styles.containerHeader}>
              <Text style={styles.textData}>Sunday 25 04 2021 11:02</Text>
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
                <Button
                  title={
                    displayParametri ? 'Opreste NemoBitul' : 'Activeaza NemoBit'
                  }
                  onPress={() => setDisplayParametri(!displayParametri)}
                />
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
    flexGrow: 1,
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
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
