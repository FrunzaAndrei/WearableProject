import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import ParameterContainer from '../../components/ParameterContainer';
import SectionText from '../../components/SectionText';
import strings from '../../mock/copies';
import Senzori from '../../SenzoriAction';

const heartIcon = require('../../assets/icons/heart.png');

const SenzorPuls = ({screenFocused}) => {
  let pulsInterval, saturatieInterval;
  const [puls, setPuls] = useState(70);
  const [satOxigen, setSatOxigen] = useState(99);

  useEffect(() => {
    if (screenFocused) {
      pulsInterval = setInterval(() => {
        const senzorPuls = Senzori.pulsReader();
        setPuls(senzorPuls);
      }, 10000);
      saturatieInterval = setInterval(() => {
        const senzorOxigen = Senzori.saturatieReader();
        setSatOxigen(senzorOxigen);
      }, 25000);
    } else {
      clearInterval(pulsInterval);
      clearInterval(saturatieInterval);
    }

    return () => {
      clearInterval(pulsInterval);
      clearInterval(saturatieInterval);
    };
  }, [screenFocused]);

  return (
    <View style={styles.container}>
      <ParameterContainer
        iconParametru={heartIcon}
        parametru1="Puls"
        parametru2="Saturatie Oxigen"
        valueParametru1={`${puls} BPM`}
        valueParametru2={`${satOxigen} %`}
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
