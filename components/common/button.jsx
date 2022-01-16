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
import styles from "../../styles/styles";
import { CenterContainer } from "../containers/GeneralContainer";

export const PlusButton = ({ setManualPage }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const changeSelection = (selection) => {
    if (selection === "camera") {
      console.log("Camera clicked");
    } else if (selection === "file") {
      console.log("file clicked");
    } else {
      console.log("manual clicked");
      setManualPage(true);
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
