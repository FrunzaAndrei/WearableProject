import React, {useRef, useEffect} from 'react';
import {Image, StyleSheet, Text, View, Animated, StatusBar} from 'react-native';
import {withNavigationFocus} from 'react-navigation';
import colors from '../../colors';
import commonStyle from '../utils/commonStyle';

const logo = require('../../assets/icons/logo.png');
const heart = require('../../assets/icons/blackHeart.png');
const heartFilled = require('../../assets/icons/filledBlackHeart.png');

const LandingScreen = ({navigation, isFocused}) => {
  const animation = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    isFocused && startAnimation();
    setTimeout(() => navigation.navigate('AuthenticationScreen'), 5000);
    !isFocused && animation.stopAnimation();
  }, [isFocused]);

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
    outputRange: [0.8, 1.25],
  });

  const animatedStyle = {
    transform: [
      {
        scale: interpolation,
      },
    ],
  };

  return (
    <>
      <StatusBar
        backgroundColor={colors.background}
        barStyle={'dark-content'}
      />
      <View style={styles.container}>
        {startAnimation()}
        <View style={styles.containerImages}>
          <Image source={logo} style={commonStyle.logo} />
        </View>
        <View>
          <Animated.Image
            source={heartFilled}
            style={[styles.heartFilledIcon, animatedStyle]}
          />
          <Image source={heart} style={styles.heartIcon} />
        </View>
        <Text style={styles.textBold}>by Smart Solution</Text>
      </View>
    </>
  );
};

export default withNavigationFocus(LandingScreen);

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
    width: 80,
    height: 80,
    resizeMode: 'contain',
    position: 'absolute',
    top: -10,
    left: -10,
  },
  heartFilledIcon: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  textBold: {fontWeight: 'bold', marginBottom: 20},
});
