import { StyleSheet } from "react-native";
import { secondary, text } from "./colors";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  generalContainer: {
    backgroundColor: secondary,
    color: text,
    padding: 15,
    borderRadius: 15,
    width: windowWidth * 0.8,
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
