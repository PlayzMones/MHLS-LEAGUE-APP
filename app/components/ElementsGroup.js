import React from "react";
import { StyleSheet, View } from "react-native";

import Title from "../components/Title";

export default function ElementsGroup({
  children,
  style,
  title,
  titleStyle,
  titleSize,
  titleSpacing,
}) {
  return (
    <View style={[style, styles.container]}>
      <Title
        style={[{ textAlign: "center" }, titleStyle]}
        mgBottom={15}
        size={titleSize}
        spacing={titleSpacing}
      >
        {title || "TITLE"}
      </Title>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#292938",
    width: "93%",
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,
  },
});
