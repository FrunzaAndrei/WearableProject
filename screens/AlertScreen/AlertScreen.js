import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

const AlertScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {errorMessage} = useSelector(state => ({
    errorMessage: state.errorMessage,
  }));

  useEffect(() => {
    if (errorMessage) {
      setTimeout(() => {
        dispatch(resetErrorMessage());
        navigation.pop();
      }, 3000);
    }
  }, []);

  return (
    <View>
      <Text>AlertA ALERTA ALERSTASDF</Text>
      {!!errorMessage && <Text>{errorMessage}</Text>}
    </View>
  );
};

export default AlertScreen;

const styles = StyleSheet.create({});
