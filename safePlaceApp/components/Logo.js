import { StyleSheet, Text, View } from "react-native";
import React from "react";

import colors from "../app/config/colors";

const Logo = () => {
  return (
    <View style={styles.innerContainer}>
      <Text style={styles.sectionTitle}>safe</Text>
      <Text style={styles.sectionTitleSecondary}>Place</Text>
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  innerContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: colors.lightGrey,
    flexDirection: "column",
  },
  sectionTitleSecondary: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.primary,
  },
});
