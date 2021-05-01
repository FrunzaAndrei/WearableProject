import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import colors from '../colors';

const ParameterContainer = ({
  iconParametru,
  styleIconParametru,
  parametru1,
  parametru2,
  valueParametru1,
  valueParametru2,
  iconECG,
}) => {
  return (
    <View style={styles.container}>
      {iconParametru && (
        <Image
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
      {iconECG && <Image source={iconECG} style={[styles.iconECG]} />}
    </View>
  );
};

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
  iconParametru: {
    width: 30,
    height: 50,
    marginVertical: 6,
  },
  iconECG: {
    width: 30,
    height: 50,
    marginVertical: 6,
  },
});

export default ParameterContainer;
