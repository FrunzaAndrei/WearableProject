import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {withNavigationFocus} from 'react-navigation';
import colors from '../../colors';
import SenzorEcg from '../Senzori/SenzorEcg';
import SenzorPuls from '../Senzori/SenzorPuls';

const SenzoriScreen = ({isFocused}) => {
  const [showEcg, setShowEcg] = useState(false);

  const handleShow = () => setShowEcg(!showEcg);

  console.log('=======');
  console.log('readData:', showEcg);
  console.log('screenFocused', isFocused);

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.background}
        translucent={false}
        showHideTransition={'slide'}
      />
      <KeyboardAvoidingView
        style={{flexGrow: 1}}
        contentContainerStyle={{flex: 1}}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={styles.containerScroll}
          contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.container}>
            <Text style={styles.title}>Parametrii biologici</Text>
          </View>
          <View style={styles.containerButtons}>
            <TouchableOpacity
              style={[
                styles.button,
                !showEcg && {borderBottomColor: colors.redLine},
              ]}
              activeOpacity={0.8}
              onPress={handleShow}>
              <Text
                style={[styles.buttonText, !showEcg && {color: colors.white}]}>
                Senzor Puls
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button,
                showEcg && {borderBottomColor: colors.redLine},
              ]}
              activeOpacity={0.8}
              onPress={handleShow}>
              <Text
                style={[styles.buttonText, showEcg && {color: colors.white}]}>
                Senzor ECG
              </Text>
            </TouchableOpacity>
          </View>
          {!showEcg && <SenzorPuls screenFocused={isFocused} />}
          {showEcg && <SenzorEcg />}
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default withNavigationFocus(SenzoriScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerScroll: {
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  containerButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backgroundTabBar,
    borderRadius: 5,
  },
  button: {
    flex: 1,
    borderBottomWidth: 4,
    borderBottomColor: colors.backgroundTabBar,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black,
  },
});
