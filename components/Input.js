import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

const Input = ({
  inputRef,
  text,
  onBlur,
  onFocus,
  placeholder,
  onChangeText,
  keyboardType,
  returnKeyType,
  style,
  onSubmitEditing,
  blurOnSubmit,
}) => {
  return (
    <View>
      <TextInput
        value={text}
        ref={inputRef}
        onBlur={onBlur}
        onFocus={onFocus}
        placeholder={placeholder}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        style={[styles.inputContainer, style]}
        returnKeyType={returnKeyType}
        onSubmitEditing={onSubmitEditing}
        blurOnSubmit={blurOnSubmit}
      />
    </View>
  );
};

Input.defaultProps = {
  keyboardType: 'default',
  ref: undefined,
  blurOnSubmit: false,
};

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

export default Input;
