import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { TouchableWithoutFeedback } from "react-native-web";
import Gradient from "../components/Gradient.js";

import Title from "../components/Title";

export default function EventPanel({
  title = "TITLE",
  subtitle = "SUBTITLE",
  onPress,
}) {
  const windowWidth = Dimensions.get("window").width;
  const x = (windowWidth - windowWidth * (93 / 100)) / 2;

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View>
        <Gradient width="93%" rx={15} style={styles.panel} marginRight={x}>
          <View style={styles.container}>
            <Title size={25} spacing={3} weight={200}>
              {subtitle || "SUBTITLE"}
            </Title>
            <Title style={{ marginTop: -10 }} size={35}>
              {title || "TITLE"}
            </Title>
          </View>
        </Gradient>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  panel: {
    width: "100%",
    height: undefined,
    aspectRatio: 21 / 9,
  },

  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
});
