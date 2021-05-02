import React from 'react';
import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../colors';

const Button = ({title, onPress, styleBody, styleText}) => {
  return (
    <TouchableOpacity
      style={[styles.containerText, styleBody]}
      onPress={onPress}
      activeOpacity={0.8}>
      <Text style={[styles.text, styleText]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  containerText: {
    backgroundColor: colors.backgroundButton,
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 4,
    marginVertical: 10,
    elevation: 5,
  },
  text: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});
