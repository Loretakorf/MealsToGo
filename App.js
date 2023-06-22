import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { RestaurantsScreen } from "./src/features/restaurants/screens/RestaurantsScreen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme/Index";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>

      <ExpoStatusBar style="auto" />
    </>
  );
}
