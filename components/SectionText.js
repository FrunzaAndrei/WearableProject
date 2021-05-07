import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../colors';

const SectionText = ({
  title,
  content,
  styleContainer,
  styleTitle,
  styleContent,
}) => {
  return (
    <View style={[styles.container, styleContainer]}>
      <Text style={[styles.title, styleTitle]}>{title}</Text>
      <Text style={[styles.content, styleContent]}>{content}</Text>
    </View>
  );
};

export default SectionText;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    backgroundColor: colors.backgroundTabBar,
    borderRadius: 10,
    marginVertical: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 6,
    textAlign: 'center',
  },
  content: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 6,
    textAlign: 'center',
  },
});
