import React, { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Pressable } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import styles from "../styles/styles";

export const Manual = ({ setManualPage }) => {
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState(new Date());
  const [data, setData] = useState([])

  const submit = async () => {
    // submit data here
    console.log("submitted");
    const receiptData = {id: Date.now(), item: item, price: price, date: date}
    const updatedData = [...data, receiptData]
    setData(updatedData)
    await AsyncStorage.setItem('data', JSON.stringify(updatedData))
    // if success return
    setManualPage(false);
  };

  const findData = async () => {
    const result = await AsyncStorage.getItem('data')
    result !== null? setData(JSON.parse(result)) : setData(null)

  }
  useEffect(() => {
    findData()
  }, [])

  return (
    <>
      <Text style={styles.dataHeader}>Enter Item</Text>
      <TextInput label="Name" value={item} onChangeText={(e) => setItem(e)} />
      <TextInput
        label="Price"
        value={price}
        onChangeText={(e) => setPrice(e)}
      />
      <TextInput
        label="Date"
        value={"Today"}
        onChangeText={(e) => setDate(e)}
      />
      <Pressable style={[styles.button, styles.buttonClose]} onPress={submit}>
        <Text style={styles.textStyle}>Submit</Text>
      </Pressable>
    </>
  );
};
