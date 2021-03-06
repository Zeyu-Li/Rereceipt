import { View } from "react-native";
import styles from "../../styles/styles";
import { LinearGradient } from "expo-linear-gradient";

export const GeneralContainer = (props) => {
  return <View style={styles.generalContainer}>{props.children}</View>;
};

export const CenterContainer = (props) => {
  return <View style={[styles.center, props.styles]}>{props.children}</View>;
};

export const FancyContainer = (props) => {
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={["#E578CD", "#CA4AAE", "#7B1164"]}
      locations={[0, 0.74, 1]}
      style={[styles.generalContainer]}
    >
      {props.children}
    </LinearGradient>
  );
};
