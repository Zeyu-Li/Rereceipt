import React, { useState } from "react";
import {
  Modal,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Pressable,
  Text,
} from "react-native";
import { Button, Portal, RadioButton } from "react-native-paper";
import { CenterContainer } from "../containers/GeneralContainer";

export const PlusButton = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const changeSelection = (selection) => {
    if (selection === "camera") {
      console.log("Camera clicked");
    } else if (selection === "file") {
      console.log("file clicked");
    } else {
      console.log("manual clicked");
    }
    setModalVisible(false);
  };

  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Add Entry</Text>
            <RadioButton.Group
              onValueChange={(value) => changeSelection(value)}
            >
              <RadioButton.Item
                style={styles.modalText}
                label="Camera"
                value="Camera"
              />
              <RadioButton.Item
                style={styles.modalText}
                label="Upload File"
                value="file"
              />
              <RadioButton.Item
                style={styles.modalText}
                label="Manual Entry"
                value="manual"
              />
            </RadioButton.Group>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles2.plus, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <CenterContainer>
          <Button onPress={() => setModalVisible(true)}>
            <Text style={[styles.textStyle1, styles.centeredView]}>+</Text>
          </Button>
        </CenterContainer>
      </Pressable>
    </View>
  );
};

export const ButtonWithStyle = ({ children }) => {
  const onPress = () => alert("you pressed");
  return (
    <TouchableOpacity onPress={onPress} style={styles2.plus}>
      {children}
    </TouchableOpacity>
  );
};

const styles2 = StyleSheet.create({
  plus: {
    height: 80,
    width: 80,
    borderRadius: 40,
    position: "fixed",
    right: 0,
    bottom: 0,
    margin: 20,
  },
});

const styles = StyleSheet.create({
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
