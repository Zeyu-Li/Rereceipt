import React, { useState } from "react";
import { Pressable } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import styles from "../styles/styles";

export const Manual = ({ setManualPage }) => {
  const [store, setStore] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState(new Date().toDateString());
  const [label, setLabel] = useState(new Date().toDateString());

  const submit = () => {
    // check that all data is entered and valid
    if (store.length != 0) {

    }
    // submit data here
    if (item == '' || price == '' || isNaN(price)) {
      alert('Invalid Input');
      return;
    }
    console.log("submitted");
    // if success return
    setManualPage(false);
  };

  const cancel = () => {
    setManualPage(false);
  }
  
  return (
    <>
      <Text style={styles.dataHeader}>Enter Receipt Info</Text>
      <TextInput label="Store Name" value={store} onChangeText={(e) => setStore(e)} />
      <TextInput
        label="Total Cost"
        value={price}
        onChangeText={(e) => setPrice(e)}
      />
      <TextInput
        label="Date"
        value={date}
        onChangeText={(e) => setDate(e)}
      />
      <Pressable style={[styles.button, styles.buttonClose]} onPress={submit}>
        <Text style={styles.textStyle}>Submit</Text>
      </Pressable>

      <Pressable style={[styles.button_cancel, styles.buttonClose]} onPress={cancel}>
        <Text style={styles.textStyle}>Cancel</Text>
      </Pressable>
    </>
  );
};
