import React from 'react';
import {StyleSheet, View} from 'react-native';
import EkgGraph from '../../components/EkgGraph';
import ParameterContainer from '../../components/ParameterContainer';
import SectionText from '../../components/SectionText';
import strings from '../../mock/copies';

const ecgIcon = require('../../assets/icons/puls.png');
const ecgImage = require('../../assets/icons/ekg.png');

const SenzorEcg = () => {
  return (
    <View style={styles.container}>
      <ParameterContainer
        iconParametru={ecgIcon}
        styleIconParametru={styles.ecgIcon}
        parametru1="ECG"
        iconECG={ecgImage}
        styleImageParametru={styles.ecgImage}
        onPress={() => {}}
      />
      <SectionText
        title={strings.ecgQuestion}
        content={`
         ${strings.ecgExplanation1}

         ${strings.ecgExplanation2}

         ${strings.ecgExplanation3}
        `}
      />
      <EkgGraph />
    </View>
  );
};

export default SenzorEcg;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ecgIcon: {
    marginVertical: 0,
    height: 60,
    width: 80,
    marginLeft: 0,
  },
  ecgImage: {
    width: 150,
    height: 60,
    marginVertical: 4,
  },
});
