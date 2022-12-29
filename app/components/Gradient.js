import React from "react";
import { View } from "react-native";
import Svg, { Rect, Defs, LinearGradient, Stop } from "react-native-svg";

import colors from "../config/colors.js";

export default function Gradient({
  inColor,
  fiColor,
  rx,
  x1,
  x2,
  y1,
  y2,
  style,
  children,
  height = "100%",
  width = "100%",
  marginRight,
}) {
  return (
    <View style={style}>
      <Svg height="100%" width="100%">
        <Defs>
          <LinearGradient
            id="grad"
            x1={x1 || "0%"}
            y1={y1 || "0%"}
            x2={x2 || "100%"}
            y2={y2 || "100%"}
          >
            <Stop offset="0" stopColor={inColor || colors.purple} />
            <Stop offset="1" stopColor={fiColor || colors.blue} />
          </LinearGradient>
        </Defs>
        <Rect
          x={marginRight}
          width={width}
          height={height}
          rx={rx || 0}
          fill="url(#grad)"
        />
        {children}
      </Svg>
    </View>
  );
}
