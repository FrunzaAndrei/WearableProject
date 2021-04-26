import React, {useEffect} from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import colors from '../../colors';
import {resetErrorMessage} from '../../redux/action';

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
      console.log('useEffect', errorMessage);
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
        backgroundColor={colors.fadeRed}
        translucent={false}
        showHideTransition={'slide'}
      />
      <View style={styles.container}>
        {!!errorTitle && <Text style={styles.title}>{errorTitle}</Text>}
        {!!errorMessage && <Text style={styles.message}>{errorMessage}</Text>}
      </View>
    </>
  );
};

export default AlertScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.fadeRed,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 36,
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
});
