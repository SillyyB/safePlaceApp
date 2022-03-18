import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
} from "react-native";
import * as React from "react";

import colors from "../config/colors";

import LocationParent from "../../components/LocationParent";

const HomeScreen = ({navigation, ShareScreen}) => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView>
        <View style={styles.headerContainer}>
          <View style={styles.innerContainer}>
            <Text style={styles.sectionTitle}>safe</Text>
            <Text style={styles.sectionTitleSecondary}>Place</Text>
          </View>
        </View>

        {/* MAP + WIDGET */}
        <View>
          <LocationParent navigation={navigation} />
        </View>

        {/* FRIENDS TAB */}
        <View></View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryBackground,
    flexDirection: "column",
    paddingHorizontal: 14,
  },
  headerContainer: {
    flexDirection: "column",
    paddingTop: 60,
    // paddingHorizontal: 24,
  },
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
