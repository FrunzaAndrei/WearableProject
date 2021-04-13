import React, {useRef} from 'react';
import {Image, StyleSheet, Text, View, Animated} from 'react-native';
import colors from '../../colors';
import commonStyle from '../utils/commonStyle';

const logo = require('../../assets/icons/logo.png');
const heart = require('../../assets/icons/blackHeart.png');

const LandingScreen = ({navigation}) => {
  const animation = useRef(new Animated.Value(1)).current;
  const startAnimation = () => {
    Animated.loop(
      Animated.timing(animation, {
        toValue: 2,
        duration: 1000,
        useNativeDriver: true,
      }),
    ).start();
  };

  const interpolation = animation.interpolate({
    inputRange: [1, 2],
    outputRange: [1, 1.25],
  });

  const animatedStyle = {
    transform: [
      {
        scale: interpolation,
      },
    ],
  };

  return (
    <View style={styles.container}>
      {startAnimation()}
      <View style={styles.containerImages}>
        <Image source={logo} style={commonStyle.logo} />
      </View>
      <Animated.Image
        source={heart}
        style={[styles.heartIcon, animatedStyle]}
      />
      <Text style={styles.textBold}>by Smart Solution</Text>
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  containerImages: {
    padding: 48,
  },
  containerContent: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 30,
  },
  heartIcon: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  textBold: {fontWeight: 'bold', marginBottom: 20},
});
