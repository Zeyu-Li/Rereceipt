import React, { useState } from "react";
import { Dimensions } from "react-native";
import { BarChart } from "react-native-chart-kit";

/* currently using 'fake' values */
const state = {
  labels: ["grocery", "tech", "entertainment"] /* purchase category */,
  datasets: [
    {
      borderWidth: 2,
      data: [200, 590, 800] /* cost */,
      colors: [
        (opacity = 1) => "#004466",
        (opacity = 1) => "#008040",
        (opacity = 1) => "#ff5c33",
      ],
    },
  ],
};

export const Chart = () => {
  return (
    <BarChart
      data={state}
      width={Dimensions.get("window").width * 0.8}
      height={220}
      yAxisLabel="$"
      chartConfig={{
        propsForLabels: {
          fontFamily: "Roboto",
        },
        backgroundColor: "transparent",
        backgroundGradientTo: "white",
        backgroundGradientFromOpacity: 0,
        backgroundGradientFrom: "white",
        backgroundGradientToOpacity: 0,
        barPercentage: 1.5,
        color: (opacity = 255) => "#e6e6e6",
        style: {
          borderRadius: 12,
          padding: 10,
          color: "white",
        },
      }}
      fromZero={true}
      withCustomBarColorFromData={true}
      flatColor={true}
      withInnerLines={false}
      showBarTops={false}
    />
  );
};
