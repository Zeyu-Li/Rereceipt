import React, { useState } from "react";
import { View } from "react-native";
import { useTailwind } from "tailwind-rn/dist";
import styles from "../../styles/styles";

export const GeneralContainer = (props) => {
  return <View style={styles.generalContainer}>{props.children}</View>;
};

export const CenterContainer = (props) => {
  return <View style={styles.center}>{props.children}</View>;
};
