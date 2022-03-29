import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import colors from "../app/config/colors";
import Searchbar from "./Searchbar";

import FriendsTab from "./FriendsTab";

const BigWidget = ({ title, secondarytitle, navigation, searchbar }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.secondarytitle}>{secondarytitle}</Text>
      </View>
      <View style={styles.horizontalDivider}></View>

      <Searchbar />
      {/* <FriendsTab navigation={navigation} /> */}
    </View>
  );
};

export default BigWidget;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 14,
    backgroundColor: colors.white,
    marginTop: 40,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.35,
    shadowRadius: 2,

    elevation: 2,
  },
  headerContainer: {
    padding: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: colors.primary,
    paddingBottom: 5,
  },
  secondarytitle: {
    fontSize: 12,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: colors.lightGrey,
  },
  horizontalDivider: {
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
  },
});
