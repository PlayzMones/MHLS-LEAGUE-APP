import React from "react";
import { StyleSheet, View, Text } from "react-native";
import colors from "../config/colors.js";

import ElementsGroup from "../components/ElementsGroup.js";
import Title from "../components/Title.js";
import Placement from "../components/Placement.js";
import TeamName from "../components/TeamName";

export default function GroupStandingsContainer({ group, mgTop = 20 }) {
  return (
    <ElementsGroup
      style={[{ marginTop: mgTop }]}
      title={"GROUP " + group.letter}
      titleSize={18}
      titleSpacing={1}
    >
      <View styles={styles.teams}>
        <Title weight={100}>TEAM</Title>
        <View style={styles.teamElement}>
          <Placement place={1} />
          <TeamName team={group.teams.first} size={32} mgLeft={10} />
        </View>
        <View style={styles.teamElement}>
          <Placement place={2} />
          <TeamName team={group.teams.second} size={32} mgLeft={10} />
          <Text style={styles.stats}>
            <Title size={25} weight={200} style={styles.stat}>
              {group.teams.second["MP-WDL"][0]}
            </Title>
            <Title size={25} weight={200} style={styles.stat}>
              {group.teams.second["MP-WDL"][1]}
            </Title>
            <Title size={25} weight={200} style={styles.stat}>
              {group.teams.second["MP-WDL"][2]}
            </Title>
            <Title size={25} weight={200} style={styles.stat}>
              {group.teams.second["MP-WDL"][3]}
            </Title>
          </Text>
        </View>
        <View style={styles.teamElement}>
          <Placement place={3} />
          <TeamName team={group.teams.third} size={32} mgLeft={10} />
        </View>
      </View>
    </ElementsGroup>
  );
}

const styles = StyleSheet.create({
  teamElement: {
    flexDirection: "row",
    alignItems: "center",
  },
  stat: {
    marginHorizontal: 4,
  },
});
