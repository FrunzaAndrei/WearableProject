import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TextInput from '../components/TextInput';
import Button from '../components/Button';

const SignInScreen = ({onPressButton}) => {
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [password, setPassword] = useState(null);

  const onPressBtn = () => {
    console.log('Button was pressed');
    onPressButton(true);
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Inregistrare</Text>
      </View>
      <View style={styles.containerTextInputs}>
        <TextInput
          text={email}
          onChangeText={setEmail}
          placeholder={'Email'}
          keyboardType={'email-address'}
          returnKeyType={'next'}
        />
        <TextInput
          text={name}
          onChangeText={setName}
          placeholder={'Nume si prenume'}
          returnKeyType={'next'}
        />
        <TextInput
          text={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholder={'Numar telefon'}
          keyboardType={'numeric'}
          returnKeyType={'next'}
        />
        <TextInput
          text={password}
          onChangeText={setPassword}
          placeholder={'Parola'}
          returnKeyType={'next'}
        />
        <TextInput
          text={password}
          onChangeText={setPassword}
          placeholder={'Reintroduceti parola'}
          returnKeyType={'send'}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={onPressBtn} title={'Inregistreaza-ma'} />
      </View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerTitle: {
    padding: 16,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 24,
  },
  buttonContainer: {
    paddingVertical: 20,
  },
  button: {
    paddingHorizontal: 20,
    width: 250,
  },
});
