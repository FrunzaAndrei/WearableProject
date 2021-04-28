import React from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import colors from '../../colors';

const HomeScreen = () => {
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
            <View style={styles.containerHeader}>
              <Text>HOME SCREEN</Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  containerScroll: {
    flexGrow: 1,
    paddingVertical: 30,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
  },
  containerHeader: {
    marginVertical: 30,
  },
});

export default HomeScreen;
