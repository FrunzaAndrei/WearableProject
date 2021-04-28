import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import colors from '../../colors';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.black} />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
});
