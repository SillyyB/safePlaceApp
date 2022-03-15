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

      <Map />

      {/* <View style={styles.fakeMapContainer}>
        <Text style={styles.fakeMap}></Text>
      </View> */}

      <HomeScreenWidget />
    </KeyboardAvoidingView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryBackground,
    paddingHorizontal: 14,
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
  fakeMap: {
    width: "100%",
    height: 250,
    backgroundColor: "black",
    marginTop: 70,
    borderRadius: 5,
  },
  fakeMapContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
