import React from "react";
import { StyleSheet, Text, View } from "react-native";

import colors from "../config/colors.js";

export default function TeamName({
  team,
  size,
  color = "gold",
  style,
  mgLeft,
}) {
  return (
    <View style={[style, { marginLeft: mgLeft }]}>
      <Text styles={styles.container}>
        <Text
          style={[{ fontSize: size || 30, color: colors[color] }, styles.class]}
        >
          {team.class}
        </Text>
        <Text
          style={[
            { fontSize: size * (3 / 5) || 18, color: colors[color] },
            styles.teamNo,
          ]}
        >
          {team.teamNo}
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  class: {
    fontWeight: "bold",
  },

  teamNo: {
    fontWeight: "bold",
    top: 3,
  },
});
