import React, {useEffect} from 'react';
import {StatusBar, StyleSheet, Text, View, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import colors from '../../colors';
import {resetErrorMessage} from '../../redux/action';

const bellIcon = require('../../assets/icons/bell.png');

const AlertScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {errorMessage, errorTitle} = useSelector(state => {
    return {
      errorMessage: state.data?.errorMessage?.message,
      errorTitle: state.data?.errorMessage?.title,
    };
  });

  useEffect(() => {
    if (errorMessage) {
      setTimeout(() => {
        dispatch(resetErrorMessage());
        navigation.pop();
      }, 3000);
    }
  }, []);

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.background}
        translucent={false}
        showHideTransition={'slide'}
      />
      <View style={styles.container}>
        <Image source={bellIcon} style={styles.icon} />
        <View style={styles.containerText}>
          {!!errorTitle && <Text style={styles.title}>{errorTitle}</Text>}
          {!!errorMessage && <Text style={styles.message}>{errorMessage}</Text>}
        </View>
      </View>
    </>
  );
};

export default AlertScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
  },
  message: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
  },
  icon: {marginVertical: 30, width: 150, height: 150},
  containerText: {
    marginTop: 30,
    backgroundColor: colors.backgroundTabBar,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 12,
  },
});
