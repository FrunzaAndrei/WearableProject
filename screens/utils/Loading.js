import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import colors from '../../colors';

const Loading = ({isLoading}) => {
  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="small" color={colors.black} />
      </View>
    );
  }
  return <></>;
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
