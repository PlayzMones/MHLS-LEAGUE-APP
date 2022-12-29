import React from "react";
import { View } from "react-native";

import Title from "../components/Title.js";

export default function Announcment({ ann }) {
  return (
    <View>
      <Title size={15} mgBottom={5}>
        {ann.title}
      </Title>
      <Title weight={200} style={{ flexShrink: 1 }}>
        {ann.content}
      </Title>
    </View>
  );
}
