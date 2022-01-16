import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Main } from "./pages/main";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import styles from "./styles/styles";
import { primary, secondary } from "./styles/colors";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary,
    accent: secondary,
  },
};

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <PaperProvider theme={theme}>
        <Main />
      </PaperProvider>

      <StatusBar style="auto" />
    </View>
  );
}
