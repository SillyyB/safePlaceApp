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
import Logo from "../../components/Logo";

const HomeScreen = ({navigation, ShareScreen}) => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView>
        <View style={styles.headerContainer}>
          <Logo />
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
});
