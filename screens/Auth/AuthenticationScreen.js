import React, {useRef, useState} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import colors from '../../colors';
import Button from '../../components/Button';
import Input from '../../components/Input';
import {loginUser, showErrorMessage} from '../../redux/action';
import commonStyle from '../utils/commonStyle';

const logo = require('../../assets/icons/logo.png');

const AuthenticationScreen = ({navigation}) => {
  const {cnpState, parolaState} = useSelector(state => ({
    cnpState: state.userLogin?.cnp,
    parolaState: state.userLogin?.parola,
  }));
  const dispatch = useDispatch();
  const [cnp, setCnp] = useState('');
  const [parola, setParola] = useState('');
  const [isHidePassword, setIsHidePassword] = useState(true);
  const parolRef = useRef();

  const handleLogin = () => {
    if (cnp && parola) {
      dispatch(loginUser(cnp, parola));
    } else {
      dispatch(showErrorMessage('NU AI ADAUGAT TOATE DATELE DE LOGARE'));
      navigation.navigate('AlertScreen');
    }
  };

  const handleInregistreaza = () => {
    navigation.navigate('InregistrareScreen');
  };

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
            <Button title="Inregistreaza-te" onPress={handleInregistreaza} />
          </View>
        </View>
        <View style={styles.footer} />
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
  footer: {
    height: 40,
  },
});
