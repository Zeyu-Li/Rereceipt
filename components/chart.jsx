import React, { useState } from "react";
import { Dimensions } from 'react-native';
import { BarChart } from "react-native-chart-kit";

/* currently using 'fake' values */
const state = {
    labels: ['grocery', 'tech', 'entertainment'], /* purchase category */
    datasets: [
        {
            borderWidth: 2,
            data: [200, 590, 800], /* cost */
            colors: [
                (opacity = 1) => `#668cff`,
                (opacity = 1) => `#ffcc66`,
                (opacity = 1) => `#8600b3`
            ]
        }
    ]
}

export const Chart = () => {
    return (
        <BarChart
            data={state}
            width={Dimensions.get('window').width - 50}
            height={220}
            yAxisLabel="$"
            chartConfig={{
                backgroundColor: "transparent",
                backgroundGradientTo: "white",
                backgroundGradientFromOpacity: 0,
                backgroundGradientFrom: "white",
                backgroundGradientToOpacity: 0,
                barPercentage: 1.5,
                color: (opacity = 255) => '#1a0000',
                style: {
                    borderRadius: 12, padding: 10
                },
            }}
            fromZero={true}
            withCustomBarColorFromData={true}
            flatColor={true}
            withInnerLines={false}
            showBarTops={false}
        />
    );
}
