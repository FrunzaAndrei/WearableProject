import React from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import colors from '../colors';

const showPassword = require('../assets/icons/showPassword.png');
const hidePassword = require('../assets/icons/hidePassword.png');

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
  isPasswordHide,
  withIconForPassword,
  setIsHidePassword,
  autoFocus,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        autoFocus={autoFocus}
        value={text}
        secureTextEntry={isPasswordHide}
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
      {withIconForPassword && (
        <TouchableOpacity
          style={styles.containerIcons}
          onPress={() => setIsHidePassword(!isPasswordHide)}>
          <Image
            source={isPasswordHide ? showPassword : hidePassword}
            style={styles.eyeIcon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

Input.defaultProps = {
  keyboardType: 'default',
  ref: undefined,
  blurOnSubmit: false,
  isPasswordHide: false,
  withIconForPassword: false,
  autoFocus: false,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginVertical: 10,
    width: 300,
  },
  inputContainer: {
    backgroundColor: colors.white,
    borderColor: 'grey',
    paddingHorizontal: 20,
    borderRadius: 4,
    width: 300,
  },
  containerIcons: {
    position: 'absolute',
    top: 12,
    right: 12,
  },
  eyeIcon: {
    width: 24,
    height: 24,
  },
});

export default Input;
