import React from "react";
import { Text, View } from "react-native";
import colors from "../config/colors";

import fontWeight from "../functions/fontWeight";

export default function Title({
  color,
  style,
  children,
  size,
  spacing,
  mgBottom,
  weight,
}) {
  return (
    <View>
      <Text
        style={[
          {
            color: color || colors.white,
            fontSize: size,
            letterSpacing: spacing,
            marginBottom: mgBottom,
            fontFamily: fontWeight(weight) || "Montserrat-ExtraBold",
          },
          style,
        ]}
      >
        {children}
      </Text>
    </View>
  );
}
