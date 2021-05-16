import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import colors from '../colors';
const screenWidth = Dimensions.get('window').width;

const EkgGraph = ({dataEkg}) => {
  const chartConfig = {
    backgroundGradientFrom: colors.white,
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: colors.white,
    backgroundGradientToOpacity: 0.5,
    color: () => colors.black,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  const data = {
    datasets: [
      {
        data: [...dataEkg],
        color: () => colors.redLine, // optional
        strokeWidth: 2, // optional
      },
    ],
  };

  return (
    <LineChart
      data={data}
      width={screenWidth}
      height={220}
      chartConfig={chartConfig}
    />
  );
};

export default EkgGraph;

const styles = StyleSheet.create({});
