import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../colors';
import CountDown from 'react-native-countdown-component';
import {useDispatch} from 'react-redux';
import {saveCounter, showErrorMessage} from '../redux/action';

const checkMarkIcon = require('../assets/icons/checkMark.png');
const moment = require('moment');

const SportsContainer = ({
  iconSport,
  iconRun,
  startTimer = false,
  time,
  title,
  isLoading = false,
  styleIconSport,
  onPress,
  navigation,
}) => {
  const [finish, setFinish] = useState(false);
  const dispatch = useDispatch();

  const handleOnFinish = () => {
    setFinish(true);
    const date = moment().format('L');
    dispatch(
      saveCounter({
        date: date,
        finalizat: true,
        tipActivitate: title,
      }),
    );
    dispatch(showErrorMessage(`Ati finalizat ${title}`));
    navigation.navigate('AlertScreen');
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.container}>
      {iconSport && (
        <Image source={iconSport} style={[styles.iconSport, styleIconSport]} />
      )}
      <View>
        {title && <Text style={styles.text}>{title}</Text>}
        <View style={styles.containerStartedCounter}>
          <Text style={styles.textStartedCounter}>{`${time} min | `}</Text>
          <CountDown
            // until={60 * time}
            until={time}
            timeToShow={['M', 'S']}
            timeLabels={{m: null, s: null}}
            onFinish={handleOnFinish}
            size={16}
            running={startTimer}
            digitStyle={{color: colors.white}}
            digitTxtStyle={{color: colors.white}}
            style={styles.containerCountDown}
            separatorStyle={{color: 'white'}}
            showSeparator
          />
        </View>
      </View>
      <View style={styles.containerIcon}>
        {iconRun && !isLoading && (
          <Image
            source={finish ? checkMarkIcon : iconRun}
            style={styles.iconRun}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default SportsContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.backgroundTabBar,
    marginHorizontal: 40,
    marginVertical: 10,
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 10,
    elevation: 6,
  },
  iconSport: {
    width: 30,
    height: 50,
    marginVertical: 6,
    resizeMode: 'contain',
  },
  iconRun: {
    width: 24,
    height: 24,
  },
  containerIcon: {
    padding: 10,
    backgroundColor: colors.background,
    borderRadius: 25,
    elevation: 4,
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  styleDigit: {
    backgroundColor: colors.background,
    padding: 3,
  },
  containerCountDown: {
    padding: 0,
    margin: 0,
  },
  containerStartedCounter: {
    flexDirection: 'row',
    alignContent: 'center',
  },
  textStartedCounter: {
    color: colors.white,
    fontSize: 16,
    marginTop: 1,
    fontWeight: 'bold',
  },
});
