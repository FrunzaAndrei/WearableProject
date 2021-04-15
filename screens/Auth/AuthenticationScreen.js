import React, {useRef, useState} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import colors from '../../colors';
import Button from '../../components/Button';
import Input from '../../components/Input';
import commonStyle from '../utils/commonStyle';

const logo = require('../../assets/icons/logo.png');

const AuthenticationScreen = () => {
  const [cnp, setCnp] = useState('');
  const [parola, setParola] = useState('');
  const parolRef = useRef();
  console.log(parolRef);
  console.log(parolRef.current);
  return (
    <KeyboardAvoidingView style={{flexGrow: 1}}>
      <ScrollView
        style={styles.containerScroll}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <Image source={logo} style={[commonStyle.logo, styles.imageLogo]} />
          <View style={styles.containerInputs}>
            <Input
              value={cnp}
              keyboardType={'numeric'}
              onChangeText={val => setCnp(val)}
              placeholder={'CNP'}
              returnKeyType={'next'}
              onSubmitEditing={() => {
                parolRef.current.focus();
              }}
            />
            <Input
              value={parola}
              inputRef={parolRef}
              onChangeText={val => setParola(val)}
              placeholder={'Parola'}
              returnKeyType={'send'}
            />
          </View>
          <View style={styles.containerButtons}>
            <Button title="Logare" onPress={() => console.log('Logare')} />
            <Button
              title="Inregistreaza-te"
              onPress={() => console.log('Inregistreaza-te')}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AuthenticationScreen;

const styles = StyleSheet.create({
  containerScroll: {
    flexGrow: 1,
    paddingVertical: 30,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  containerInputs: {
    marginVertical: 30,
  },
});
