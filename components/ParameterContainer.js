import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../colors';

const ParameterContainer = ({
  iconParametru,
  styleIconParametru,
  styleImageParametru,
  parametru1,
  parametru2,
  valueParametru1,
  valueParametru2,
  iconECG,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.container}>
      {iconParametru && (
        <Image
          resizeMode="contain"
          source={iconParametru}
          style={[styles.iconParametru, styleIconParametru]}
        />
      )}
      {(parametru1 || parametru2) && (
        <View style={styles.containerDenumiri}>
          {parametru1 && <Text style={styles.textDenumiri}>{parametru1}</Text>}
          {parametru2 && <Text style={styles.textDenumiri}>{parametru2}</Text>}
        </View>
      )}
      {(valueParametru1 || valueParametru2) && (
        <View style={styles.containerValori}>
          {valueParametru1 && (
            <Text style={styles.textDenumiri}>{valueParametru1}</Text>
          )}
          {valueParametru2 && (
            <Text style={styles.textDenumiri}>{valueParametru2}</Text>
          )}
        </View>
      )}
      {iconECG && (
        <Image
          resizeMode="cover"
          resizeMethod="scale"
          source={iconECG}
          style={[styles.iconECG, styleImageParametru]}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.backgroundTabBar,
    marginVertical: 10,
    paddingRight: 30,
    borderRadius: 10,
    elevation: 6,
  },
  iconParametru: {
    width: 35,
    height: 40,
    marginVertical: 14,
    marginLeft: 30,
  },
  iconECG: {
    width: 30,
    height: 50,
    marginVertical: 6,
  },
  textDenumiri: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ParameterContainer;
