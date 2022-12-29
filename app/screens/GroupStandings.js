import React from "react";
import { StyleSheet, View } from "react-native";

import colors from "../config/colors.js";
import AppScreen from "../components/AppScreen.js";
import GroupStandingsContainer from "../containers/GroupStandingsContainer.js";

const groups = require("../schemas/groups.json");

export default function GroupStandings({}) {
  return (
    <AppScreen style={styles.container}>
      <GroupStandingsContainer group={groups.gpA} />
    </AppScreen>
  );
}

const styles = new StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
  },
});
