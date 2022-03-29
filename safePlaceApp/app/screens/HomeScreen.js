import {
  KeyboardAvoidingView,
  StyleSheet,
  View,
  ScrollView,
} from "react-native";
import * as React from "react";

import colors from "../config/colors";

import LocationParent from "../../components/LocationParent";
import Logo from "../../components/Logo";
import FriendsTabHomeScreen from "../../components/FriendsTabHomeScreen";

const HomeScreen = ({ navigation }) => {
  return (
    <KeyboardAvoidingView behavior="padding">
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Logo />
          </View>

          {/* MAP + WIDGET */}
          <View>
            <LocationParent navigation={navigation} />
          </View>
        </View>
        {/* FRIENDS TAB */}
        <View>
          <FriendsTabHomeScreen navigation={navigation} />
        </View>
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
  },
});
