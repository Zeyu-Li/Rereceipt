import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
} from "react-native";
import SearchBar from "./SearchBar/SearchBar";
export default function App() {
  const [data] = useState([
    ["Superstore"],
    "puma",
    "McDonalds",
    "Walmart",
    "shopping",
    "grocery",
    "fitness",
    "health",
    "01/15/2022",
    "yoyo",
  ]);

  const [filtered, setFiltered] = useState(data);
  const [searching, setSearching] = useState(false);
  const onSearch = (text) => {
    if (text) {
      setSearching(true);
      const temp = text.toLowerCase();

      const tempList = data.filter((item) => {
        if (item.match(temp)) return item;
      });
      setFiltered(tempList);
    } else {
      setSearching(false);
      setFiltered(data);
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Search"
        placeholderTextColor="white"
        onChangeText={onSearch}
      />
      <View
        style={{
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "center",
          }}
        ></View>
      </View>

      {searching && (
        <SearchBar onPress={() => setSearching(false)} dataSource={filtered} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    alignItems: "center",
    marginTop: "20%",
    flex: 1,
    backgroundColor: "#A9A9A9",
  },
  textInput: {
    backgroundColor: "#A9A9A9",
    width: "80%",
    borderRadius: 5,
    height: 50,
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 10,
  },
});
