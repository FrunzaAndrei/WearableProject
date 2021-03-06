import React, {useRef, useState, useEffect} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import colors from '../../colors';
import Button from '../../components/Button';
import Input from '../../components/Input';
import {loginUser, showErrorMessage} from '../../redux/action';
import commonStyle from '../utils/commonStyle';
import Loading from '../utils/Loading';

const logo = require('../../assets/icons/logo.png');

const AuthenticationScreen = ({navigation}) => {
  const {cnpState, parolaState, dateInregistrare, doneInreg} = useSelector(
    state => ({
      cnpState: state.data.userLogin?.cnp,
      parolaState: state.data.userLogin?.password,
      dateInregistrare: state.data.dateInregistrare,
      doneInreg: state.data.doneInreg,
    }),
  );
  const dispatch = useDispatch();
  const [cnp, setCnp] = useState('');
  const [parola, setParola] = useState('');
  const [loading, setLoading] = useState(false);
  const [isHidePassword, setIsHidePassword] = useState(true);
  const parolRef = useRef();

  useEffect(() => {
    if (doneInreg) {
      if (cnp == dateInregistrare?.cnp && parola == dateInregistrare?.parola) {
        navigation.navigate('Home');
      }
      setLoading(false);
      return;
    }
    if (cnpState && parolaState) {
      navigation.navigate('Home');
    }
    setLoading(false);
  }, [cnpState, parolaState]);

  const handleLogin = () => {
    setLoading(true);
    if (cnp && parola) {
      dispatch(loginUser(cnp, parola));
      setLoading(false);
    } else {
      dispatch(
        showErrorMessage(
          'Eroare Logare',
          'Te rugam sa adaugi toate datele de logare',
        ),
      );
      setLoading(false);
      navigation.navigate('AlertScreen');
    }
  };

  const handleInregistreaza = () => {
    navigation.navigate('InregistrareScreen');
    setLoading(false);
  };

  if (loading) {
    return <Loading />;
  }

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
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
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
                withIconForPassword={true}
                value={parola}
                inputRef={parolRef}
                onChangeText={val => setParola(val)}
                placeholder={'Parola'}
                returnKeyType={'send'}
                isPasswordHide={isHidePassword}
                setIsHidePassword={setIsHidePassword}
                onSubmitEditing={handleLogin}
              />
            </View>
            <View style={styles.containerButtons}>
              <Button title="Logare" onPress={handleLogin} />
              <Button title="Inregistrare" onPress={handleInregistreaza} />
            </View>
          </View>
          <View style={styles.footer} />
        </ScrollView>
      </KeyboardAvoidingView>
    </>
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
  footer: {
    height: 40,
  },
});
