import React, {useEffect, useState} from 'react';
import {StyleSheet, View, ScrollView, StatusBar} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useDispatch} from 'react-redux';
import colors from '../colors';
import {changeCount} from '../redux/action';
import BluetoothModule from './BluetoothModule';
import SignInScreen from './SignInScreen';

const AuthScreen = () => {
  const [wasPressedBtn, setBtnPressed] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeCount(34));
  }, []);

  return (
    <View>
      <StatusBar barStyle={'dark-content'} backgroundColor={colors.white} />
      <ScrollView style={styles.containerContent}>
        {/* <View style={styles.containerHeader}>
          <Text>Wearable</Text>
        </View> */}
        <View style={styles.content}>
          {wasPressedBtn && <BluetoothModule />}
          {!wasPressedBtn && <SignInScreen onPressButton={setBtnPressed} />}
        </View>
      </ScrollView>
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  containerContent: {
    flexGrow: 1,
    backgroundColor: Colors.white,
  },
  containerHeader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
