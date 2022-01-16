import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Main } from "./pages/main";
import styles from "./styles/styles";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <Main />
      <StatusBar style="auto" />
    </View>
  );
}
