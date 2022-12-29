import React from "react";
import { StatusBar } from "react-native";
import { useFonts } from "expo-font";

// Importing Screens
import MainScreen from "./app/screens/MainScreen";
import GroupStandings from "./app/screens/GroupStandings";

export default function App() {
  StatusBar.setBarStyle("light-content");
  const [loaded] = useFonts({
    "Montserrat-Light": require("./assets/fonts/Montserrat-Light.ttf"),
    "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
    "Montserrat-ExtraBold": require("./assets/fonts/Montserrat-ExtraBold.ttf"),
  });

  if (!loaded) return null;

  return <GroupStandings />;
}
