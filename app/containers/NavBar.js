import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, View, StatusBar, Platform } from "react-native";

export default function NavBar({}) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/LeagueLogoLight.png")}
        style={styles.logo}
      />
      <MaterialCommunityIcons name="bell-outline" size={30} color={"white"} />
      <MaterialCommunityIcons
        name="magnify"
        size={34}
        color={"white"}
        style={{
          marginLeft: 10,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 10,
    marginBottom: 30,
  },

  logo: {
    top: 11,
    height: "100%",
    width: undefined,
    aspectRatio: 32 / 5,
    position: "absolute",
    left: 6,
  },
});
