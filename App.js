import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Main } from "./pages/main";
import { Provider as PaperProvider, MD2LightTheme } from "react-native-paper";
import styles from "./styles/styles";
import { primary, secondary } from "./styles/colors";

const theme = {
  ...MD2LightTheme,
  roundness: 2,
  colors: {
    ...MD2LightTheme.colors,
    primary,
    accent: secondary,
  },
};

export default function App() {
  const getPage = () => {
    return <Main />;
  };

  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <PaperProvider theme={theme}>{getPage()}</PaperProvider>

      <StatusBar style="auto" />
    </View>
  );
}
