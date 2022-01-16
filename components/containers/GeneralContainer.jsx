import { View } from "react-native";
import styles from "../../styles/styles";
import { LinearGradient } from "expo-linear-gradient";

export const GeneralContainer = (props) => {
  return <View style={styles.generalContainer}>{props.children}</View>;
};

export const CenterContainer = (props) => {
  return <View style={styles.center}>{props.children}</View>;
};

export const FancyContainer = (props) => {
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={["#E192D0", "#CA4AAE", "#7B1164"]}
      style={styles.generalContainer}
    >
      {props.children}
    </LinearGradient>
  );
};
