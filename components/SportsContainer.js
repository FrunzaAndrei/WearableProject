import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../colors';
import Loading from '../screens/utils/Loading';

const SportsContainer = ({
  iconSport,
  iconRun,
  timeRunning,
  time,
  title,
  isLoading = false,
  styleIconSport,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.container}>
      {iconSport && (
        <Image source={iconSport} style={[styles.iconSport, styleIconSport]} />
      )}
      <View>
        {title && <Text style={styles.text}>{title}</Text>}
        <Text style={styles.text}>{`${timeRunning} | ${time} min`}</Text>
      </View>
      <View style={styles.containerIcon}>
        <Loading isLoading={isLoading} />
        {iconRun && !isLoading && (
          <Image source={iconRun} style={styles.iconRun} />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default SportsContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.backgroundTabBar,
    marginHorizontal: 40,
    marginVertical: 10,
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 10,
    elevation: 6,
  },
  iconSport: {
    width: 30,
    height: 50,
    marginVertical: 6,
    resizeMode: 'contain',
  },
  iconRun: {
    width: 24,
    height: 24,
  },
  containerIcon: {
    padding: 10,
    backgroundColor: colors.background,
    borderRadius: 25,
    elevation: 4,
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
