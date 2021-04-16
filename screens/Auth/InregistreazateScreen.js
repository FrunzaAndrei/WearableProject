import React from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
} from 'react-native';
import colors from '../../colors';
import commonStyle from '../utils/commonStyle';

const logo = require('../../assets/icons/logo.png');

const InregistreazateScreen = () => {
  return (
    <KeyboardAvoidingView style={{flexGrow: 1}}>
      <ScrollView
        style={styles.containerScroll}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <Image source={logo} style={[commonStyle.logo, styles.imageLogo]} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
});
