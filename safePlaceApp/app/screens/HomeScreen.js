import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React from "react";

import colors from "../config/colors";
import HomeScreenWidget from "../../components/HomeScreenWidget";
import Map from "../../components/Map";

const HomeScreen = () => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.headerContainer}>
        <Text style={styles.sectionTitle}>safe</Text>
        <Text style={styles.sectionTitleSecondary}>Place</Text>
      </View>
      <View style={styles.mapContainer}>
        <Map />
      </View>
      <View style={styles.widgetContainer}>
        <HomeScreenWidget />
      </View>
    </KeyboardAvoidingView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryBackground,
    flexDirection: "column",
    // paddingHorizontal: 14, SET PADDING ENTIRE SCREEN
  },
  headerContainer: {
    flexDirection: "row",
    paddingTop: 80,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.lightGrey,
  },
  sectionTitleSecondary: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.primary,
  },

  // MAP
  mapContainer: {
    // position: "absolute",
  },

  widgetContainer: {
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.35,
    shadowRadius: 2,

    elevation: 2,
  },
});
