import React from "react";
import { StyleSheet, View } from "react-native";

import colors from "../config/colors.js";
import Title from "./Title.js";

export default function Placement({ place, style }) {
  return (
    <View
      style={[
        style,
        styles.container,
        { backgroundColor: place === 3 ? colors.darkred : colors.darkblue },
      ]}
    >
      <Title weight={300}>{place}</Title>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 25,
    height: 25,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
