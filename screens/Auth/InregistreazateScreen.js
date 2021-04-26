import React, {useRef, useState} from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  StatusBar,
} from 'react-native';
import {useDispatch} from 'react-redux';
import colors from '../../colors';
import Button from '../../components/Button';
import Input from '../../components/Input';
import {inregistrareUser, showErrorMessage} from '../../redux/action';
import commonStyle from '../utils/commonStyle';

const logo = require('../../assets/icons/logo.png');

const InregistreazateScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const [nume, setNume] = useState('');
  const [prenume, setPrenume] = useState('');
  const [dataNasterii, setDataNasterii] = useState('');
  const [localitatea, setLocalitate] = useState('');
  const [numarTelefon, setNumarTelefon] = useState('');
  const [email, setEmail] = useState('');
  const [cnp, setCnp] = useState('');
  const [parola, setParola] = useState('');
  const [confirmareParola, setConfirmareParola] = useState('');
  const [isHidePassword, setIsHidePassword] = useState(true);
  const [isHidePasswordConf, setIsHidePasswordConf] = useState(true);

  const prenumeRef = useRef();
  const dataNasteriiRef = useRef();
  const localitateRef = useRef();
  const numarTelefonRef = useRef();
  const emailRef = useRef();
  const cnpRef = useRef();
  const parolaRef = useRef();
  const confirmareParolaRef = useRef();

  const handleInregistreaza = () => {
    if (
      nume.length === 0 &&
      prenume.length === 0 &&
      dataNasterii.length === 0 &&
      localitatea.length === 0 &&
      numarTelefon.length === 0 &&
      email.length === 0 &&
      cnp.length === 0 &&
      parola.length === 0 &&
      confirmareParola.length === 0
    ) {
      dispatch(
        showErrorMessage(
          'Eroare Inregistrare',
          'Te rugam sa adaugi toate datele de inregistrare corecte',
        ),
      );
      navigation.navigate('AlertScreen');
      return;
    }
    if (parola !== confirmareParola) {
      dispatch(
        showErrorMessage(
          'Eroare Confirmare Parola',
          'Te rugam sa verifici parola introdusa',
        ),
      );
      navigation.navigate('AlertScreen');
      return;
    }
    dispatch(
      inregistrareUser({
        nume,
        prenume,
        dataNasterii,
        localitatea,
        numarTelefon,
        email,
        cnp,
        parola,
      }),
    );
    navigation.navigate('Logare');
  };

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
            <Image source={logo} style={[commonStyle.logo, styles.imageLogo]} />
          </View>
          <View style={styles.containerInputs}>
            <Input
              value={nume}
              autoFocus={!nume}
              onChangeText={val => setNume(val)}
              placeholder={'Nume'}
              returnKeyType={'next'}
              onSubmitEditing={() => {
                prenumeRef.current.focus();
              }}
            />
            <Input
              value={prenume}
              inputRef={prenumeRef}
              onChangeText={val => setPrenume(val)}
              placeholder={'Prenume'}
              returnKeyType={'next'}
              onSubmitEditing={() => {
                dataNasteriiRef.current.focus();
              }}
            />
            <Input
              value={dataNasterii}
              inputRef={dataNasteriiRef}
              onChangeText={val => setDataNasterii(val)}
              keyboardType={'numeric'}
              placeholder={'Data Nasterii'}
              returnKeyType={'next'}
              onSubmitEditing={() => {
                localitateRef.current.focus();
              }}
            />
            <Input
              value={localitatea}
              inputRef={localitateRef}
              onChangeText={val => setLocalitate(val)}
              placeholder={'Localitatea'}
              returnKeyType={'next'}
              onSubmitEditing={() => {
                numarTelefonRef.current.focus();
              }}
            />
            <Input
              value={numarTelefon}
              inputRef={numarTelefonRef}
              onChangeText={val => setNumarTelefon(val)}
              keyboardType={'numeric'}
              placeholder={'Telefon'}
              returnKeyType={'next'}
              onSubmitEditing={() => {
                emailRef.current.focus();
              }}
            />
            <Input
              value={email}
              inputRef={emailRef}
              onChangeText={val => setEmail(val)}
              placeholder={'Email'}
              returnKeyType={'next'}
              onSubmitEditing={() => {
                cnpRef.current.focus();
              }}
            />
            <Input
              value={cnp}
              inputRef={cnpRef}
              keyboardType={'numeric'}
              onChangeText={val => setCnp(val)}
              placeholder={'CNP'}
              returnKeyType={'next'}
              onSubmitEditing={() => {
                parolaRef.current.focus();
              }}
            />
            <Input
              withIconForPassword={true}
              value={parola}
              inputRef={parolaRef}
              onChangeText={val => setParola(val)}
              placeholder={'Parola'}
              returnKeyType={'send'}
              isPasswordHide={isHidePassword}
              setIsHidePassword={setIsHidePassword}
              onSubmitEditing={() => {
                confirmareParolaRef.current.focus();
              }}
            />
            <Input
              withIconForPassword={true}
              value={confirmareParola}
              inputRef={confirmareParolaRef}
              onChangeText={val => setConfirmareParola(val)}
              placeholder={'Confirmare parola'}
              returnKeyType={'send'}
              isPasswordHide={isHidePasswordConf}
              setIsHidePassword={setIsHidePasswordConf}
              onSubmitEditing={() => {
                console.log('Confirmare');
              }}
            />
          </View>
          <View style={styles.containerButtons}>
            <Button title="Inregistreaza-te" onPress={handleInregistreaza} />
          </View>
          <View style={styles.footer} />
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default InregistreazateScreen;

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
  imageLogo: {
    marginBottom: 30,
  },
  containerInputs: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerButtons: {
    margin: 30,
    paddingHorizontal: 60,
  },
  footer: {
    height: 40,
  },
});
