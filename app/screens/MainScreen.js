// Importing React & React Native
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

// Importing Components
import AppScreen from "../components/AppScreen.js";
import ElementsGroup from "../components/ElementsGroup.js";

// Importing Containers
import NavBar from "../containers/NavBar.js";
import EventPanel from "../containers/EventPanel.js";
import MatchCard from "../containers/MatchCard.js";
import Announcment from "../components/Announcment.js";

// Importing Models
const fixtures = require("../schemas/fixtures.json");
const announcments = require("../schemas/announcments.json");

// Screen Code
export default function MainScreen({}) {
  return (
    <ScrollView>
      <AppScreen>
        <NavBar />
        <EventPanel title="STANDINGS" subtitle="GROUP" />
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <ElementsGroup title="UPCOMING MATCHES">
            <View style={styles.matches}>
              <MatchCard fixture={fixtures["001"]} />
              <MatchCard fixture={fixtures["002"]} x2="0%" x1="100%" />
            </View>
          </ElementsGroup>
          <ElementsGroup title="ANNOUNCMENTS">
            <Announcment ann={announcments["001"]} />
          </ElementsGroup>
        </View>
      </AppScreen>
    </ScrollView>
  );
}

// Styling
const styles = new StyleSheet.create({
  matches: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
