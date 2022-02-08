import React from "react";
import { Text, View } from "react-native";
import { ThemeProvider } from "styled-components";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";
import theme from "./src/global/styles/theme";
import { ShoppingList } from "./src/screens/ShoppingList";
export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ThemeProvider theme={theme}>
      <ShoppingList />
    </ThemeProvider>
  );
}
