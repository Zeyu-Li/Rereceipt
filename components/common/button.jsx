import React, { useState} from "react";
import {Modal, View, StyleSheet, TouchableOpacity, Alert, Pressable, Text} from "react-native";

export const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Choose From Gallery</Text>
            <Text style={styles.modalText}>Take Photo</Text>
            <Text style={styles.modalText}>Manually Add Entry</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
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
        <Text style={styles.textStyle1}>+</Text>
      </Pressable>
    </View>
  );
};

export const ButtonWithStyle = ({children}) => {
  const onPress = () => alert('you pressed');
  return <TouchableOpacity onPress={onPress} style={styles2.plus}>{children}</TouchableOpacity>;

};


const styles2 = StyleSheet.create({
  plus: {
    alignItems: 'center',
    height: 80,
    width: 80,
    borderRadius: 40,
    marginTop: 450,
    marginRight:-210
  }

});

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
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
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 25,
    padding: 20,
    elevation: 2,
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
    textAlign: "center"
  },
  textStyle1: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 60, 
    textAlign: 'center'
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});