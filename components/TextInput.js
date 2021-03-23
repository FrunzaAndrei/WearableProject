import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

const Input = ({
  text,
  onBlur,
  onFocus,
  placeholder,
  onChangeText,
  keyboardType,
  returnKeyType,
  style,
}) => {
  return (
    <TextInput
      value={text}
      onBlur={onBlur}
      onFocus={onFocus}
      placeholder={placeholder}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      style={[styles.inputContainer, style]}
      returnKeyType={returnKeyType}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: 'white',
    borderColor: 'grey',
    width: 250,
    paddingHorizontal: 20,
    borderRadius: 4,
    marginVertical: 10,
  },
});
