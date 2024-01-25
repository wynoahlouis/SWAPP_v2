import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import globalstyles from "./src/config/styles";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  PaperProvider,
  MD3LightTheme as DefaultTheme,
} from "react-native-paper";
import colors from "./src/config/colors";
import NavigationStack from "./src/components/navigation/NavigationStack"
import { UserProvider } from "./src/components//pages/UserContext";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const theme = {
    ...DefaultTheme,
    colors: colors.colors,
    mode: "exact",
  };

  return (
    <PaperProvider theme={theme}>
      <UserProvider>
        <SafeAreaView style={styles.container}>
          <StatusBar style="auto" />
          <NavigationContainer>
            <NavigationStack />
          </NavigationContainer>
        </SafeAreaView>
      </UserProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create(globalstyles);
