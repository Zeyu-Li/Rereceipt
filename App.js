import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Main } from "./pages/main";
import SearchBar from "./SearchBar/SearchBar";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <Main />
      <StatusBar style="auto" />
      <div className="App">
        <SearchBar placeholder="Search here" data={UserData} />
      </div>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
