import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Chart } from "../components/chart";

export const Analysis = () => {
  return (
    <View style={styles.container}>
      <Chart />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 20,
  },
});