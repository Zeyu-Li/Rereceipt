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
  // buttons

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 20,
    paddingTop: 10,
    paddingBottom: 10,
    elevation: 2,
    display: "flex",
    alignContent: "flex-end",
    justifyContent: "flex-end",
    width: "100%",
    marginTop: 10
  },
  button_cancel: {
    borderRadius: 20,
    padding: 20,
    paddingTop: 10,
    paddingBottom: 10,
    elevation: 2,
    display: "flex",
    alignContent: "flex-end",
    justifyContent: "flex-end",
    width: "100%",
    marginTop:20
  },
  buttonOpen: {
    backgroundColor: "#2196F3",
  },
  buttonClose: {
    backgroundColor: "#F194FF",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "top",
  },
  textStyle1: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 60,
  },
  modalText: {
    marginBottom: 15,
    fontSize: 20,
    textAlign: "center",
  },
});

export default styles;
