import React from 'react';
import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';

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
    backgroundColor: '#133337',
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
