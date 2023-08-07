import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import * as firebase from "firebase/app";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { RestaurantsContextProvider } from "./src/servises/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/servises/location/location.context";
import { Navigation } from "./src/infrastructure/navigation";
import { FavouritesContextProvider } from "./src/servises/favourites/favourites.context";
import { AuthenticationContextProvider } from "./src/servises/authenfication/authentication.context";

const firebaseConfig = {
  apiKey: "AIzaSyBU_qiumIFgAbyV_L9hbyttglF-ftstTWM",
  authDomain: "mealstogo-cb92a.firebaseapp.com",
  projectId: "mealstogo-cb92a",
  storageBucket: "mealstogo-cb92a.appspot.com",
  messagingSenderId: "432742727709",
  appId: "1:432742727709:web:578855591b751d9f0046f4",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
