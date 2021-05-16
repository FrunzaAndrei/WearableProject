import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import EkgGraph from '../../components/EkgGraph';
import ParameterContainer from '../../components/ParameterContainer';
import SectionText from '../../components/SectionText';
import strings from '../../mock/copies';
import Senzori from '../../SenzoriAction';
import InitialEkg from '../../bluetooth/index';

const ecgIcon = require('../../assets/icons/puls.png');
const ecgImage = require('../../assets/icons/ekg.png');

const SenzorEcg = () => {
  let ekgInterval;
  const [data, setData] = useState(InitialEkg.ekg);
  useEffect(() => {
    ekgInterval = setInterval(() => {
      const ekg = Senzori.getEkg(data);
      setData(ekg);
    }, 800);
    return () => {
      clearInterval(ekgInterval);
    };
  }, []);
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
      <EkgGraph dataEkg={data} />
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
