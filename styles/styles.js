import { StyleSheet } from "react-native";
import { primary, secondary, text } from "./colors";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const generalContainer = {
  color: text,
  padding: 15,
  borderRadius: 15,
  marginBottom: 20,
  width: windowWidth * 0.8,
};

const styles = StyleSheet.create({
  generalContainer: {
    backgroundColor: secondary,
    ...generalContainer,
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: primary,
    color: text,
    alignItems: "center",
    padding: 35,
  },
  dataHeader: {
    color: text,
    fontWeight: "bold",
  },
  dataCell: {
    color: text,
  },
});

export default styles;
