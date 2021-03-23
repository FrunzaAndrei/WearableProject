import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {changeCount} from './redux/action';
import BluetoothModule from './screens/BluetoothModule';
import SignInScreen from './screens/SignInScreen';

const App = () => {
  const [wasPressedBtn, setBtnPressed] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeCount(34));
  }, []);

  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />
      <ScrollView style={styles.containerContent}>
        {/* <View style={styles.containerHeader}>
          <Text>Wearable</Text>
        </View> */}
        <View style={styles.content}>
          {wasPressedBtn && <BluetoothModule />}
          {!wasPressedBtn && <SignInScreen onPressButton={setBtnPressed} />}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerContent: {
    flexGrow: 1,
    backgroundColor: 'gray',
  },
  containerHeader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
