import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Gradient from "../components/Gradient.js";
import TeamName from "../components/TeamName.js";
import Title from "../components/Title.js";

import colors from "../config/colors.js";
import getPeriod from "../functions/getPeriod.js";

export default function MatchCard({ fixture, x1, y1, x2, y2, rx }) {
  const { date, teams, group } = fixture;

  return (
    <View style={styles.container}>
      <Gradient
        inColor={colors.verydarkblue}
        fiColor={colors.darkblue}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        rx={rx || 15}
      >
        <View style={styles.groupAndDate}>
          <Title weight={100} style={styles.group} size={16}>
            GROUP {group}
          </Title>
          <View style={styles.dateAndTime}>
            <Title weight={100} size={12}>
              {date.date}
            </Title>
            <Title weight={400} size={12}>
              {getPeriod(date.period)}
            </Title>
          </View>
        </View>
        <View style={styles.teamContainer}>
          <TeamName team={teams.home} size={32} />
          <Text style={styles.score}>
            {teams.home.score == null ? "-" : teams.home.score}
          </Text>
        </View>
        <View style={styles.teamContainer}>
          <TeamName team={teams.away} size={32} />
          <Text style={styles.score}>
            {teams.away.score == null ? "-" : teams.away.score}
          </Text>
        </View>
      </Gradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    borderRadius: 15,
    marginHorizontal: 5,
  },

  groupAndDate: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    marginTop: 6,
    marginBottom: 8,
  },

  dateAndTime: {
    marginLeft: 18,
    alignItems: "center",
  },

  score: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.white,
    position: "absolute",
    right: 20,
  },

  teamContainer: {
    marginLeft: 15,
  },
});
