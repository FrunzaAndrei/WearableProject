import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import colors from '../colors';
const screenWidth = Dimensions.get('window').width;

const EkgGraph = () => {
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
        data: [
          620,
          630,
          645,
          630,
          630,
          600,
          750,
          590,
          630,
          630,
          665,
          630,
          635,
          630,
          620,
          630,
          650,
          630,
          630,
          600,
          750,
          590,
          630,
          630,
          660,
          630,
          635,
          630,
          620,
          630,
          650,
          630,
          630,
          600,
          755,
          595,
          630,
          630,
          665,
          620,
          630,
          645,
          630,
          630,
          600,
          750,
          590,
          630,
          630,
          665,
          630,
          635,
          630,
          620,
          630,
          650,
          630,
          630,
          600,
          750,
          590,
          630,
          630,
          660,
          630,
          635,
          630,
          620,
          630,
          650,
          630,
          630,
          600,
          755,
          595,
          630,
          630,
          665,
        ],
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
