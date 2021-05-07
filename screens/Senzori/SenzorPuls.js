import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ParameterContainer from '../../components/ParameterContainer';
import SectionText from '../../components/SectionText';
import strings from '../../mock/copies';

const heartIcon = require('../../assets/icons/heart.png');

const SenzorPuls = () => {
  return (
    <View style={styles.container}>
      <ParameterContainer
        iconParametru={heartIcon}
        parametru1="Puls"
        parametru2="Saturatie Oxigen"
        valueParametru1="70BPM"
        valueParametru2="90 %"
        onPress={() => {}}
        disabled={true}
      />
      <SectionText
        title={strings.bpmQuestion}
        content={strings.bpmExplanation}
      />
      <SectionText
        title={strings.saturatiaOxigenQuestion}
        content={`
        ${strings.saturatiaOxigenExplanation1}

        ${strings.saturatiaOxigenExplanation2}

        ${strings.saturatiaOxigenExplanation3}
       `}
      />
    </View>
  );
};

export default SenzorPuls;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
  },
});
