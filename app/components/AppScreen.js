import React from "react";
import { SafeAreaView, StyleSheet, View, StatusBar } from "react-native";

import colors from "../config/colors.js";

export default function AppScreen({ style, children }) {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={[
          {
            marginTop:
              Platform.OS == "android" ? StatusBar.currentHeight + 10 : 10,
            width: "100%",
          },
          style,
        ]}
      >
        {children}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
});
