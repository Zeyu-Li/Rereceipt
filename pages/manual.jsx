import React, { useState } from "react";
import { Pressable } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import styles from "../styles/styles";

export const Manual = ({ setManualPage }) => {
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState(new Date().toDateString());

  const submit = () => {
    // submit data here
    console.log("submitted");
    // if success return
    setManualPage(false);
  };

  return (
    <>
      <Text style={styles.dataHeader}>Enter Receipt Info</Text>
      <TextInput label="Store Name" value={item} onChangeText={(e) => setItem(e)} />
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
    </>
  );
};
