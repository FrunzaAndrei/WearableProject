import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import colors from '../colors';

const SportContainerCalendar = ({
  iconSport,
  styleIconSport,
  iconRun,
  title,
  status,
}) => {
  return (
    <View style={styles.container}>
      {iconSport && (
        <Image source={iconSport} style={[styles.iconSport, styleIconSport]} />
      )}
      <View style={styles.containerText}>
        {title && <Text style={styles.text}>{title}</Text>}
        {status && <Text style={styles.status}>{status}</Text>}
      </View>
      <View style={styles.containerIcon}>
        {iconRun && <Image source={iconRun} style={styles.iconRun} />}
      </View>
    </View>
  );
};

export default SportContainerCalendar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.backgroundTabBar,
    marginHorizontal: 20,
    marginVertical: 10,
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 10,
    elevation: 6,
  },
  containerText: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
  },
  status: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.white,
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
});
