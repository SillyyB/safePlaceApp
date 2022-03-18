import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import colors from "../app/config/colors";
import AddFriendsTab from "./AddFriendsTab";
import FriendsTab from "./FriendsTab";

const FriendsTabHomeScreen = ({ navigation }) => {
  const [value, setValue] = useState("A");

  const checkValue = () => {
    if (value === "A") {
      return <Text style={[styles.friendsButton]}>Friends</Text>;
    } else {
      return <Text style={{ color: colors.lightGrey }}>Friends</Text>;
    }
  };
  return (
    <KeyboardAvoidingView>
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={(e) => setValue("A")}>
          <Text
            style={
              value === "A" ? styles.friendsButton : styles.addFriendsButton
            }
          >
            Friends {/* */}
            <Text
              style={
                ([styles.friendsButton],
                { color: colors.lightGrey, fontSize: 13 })
              }
            >
              (4)
            </Text>
          </Text>
        </TouchableOpacity>
        <View style={styles.verticleLine}></View>
        <TouchableOpacity onPress={(e) => setValue("B")}>
          <Text
            style={
              value === "B" ? styles.friendsButton : styles.addFriendsButton
            }
          >
            add Friends
          </Text>
        </TouchableOpacity>
      </View>
      {/* <View style={{ backgroundColor: colors.white }}>
        <Text style={styles.friendsCount}>4 friends</Text>
      </View> */}

      {(() => {
        switch (value) {
          case "A":
            return <FriendsTab />;
          case "B":
            return <AddFriendsTab navigation={navigation} />;
          default:
            return <FriendsTab />;
        }
      })()}
    </KeyboardAvoidingView>
  );
};

export default FriendsTabHomeScreen;

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: colors.white,
    marginTop: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
  },
  friendsButton: {
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: colors.primary,
  },
  addFriendsButton: {
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: colors.lightGrey,
  },
  verticleLine: {
    height: "100%",
    width: 1,
    backgroundColor: "#909090",
  },
  friendsCount: {
    fontSize: 13,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: colors.darkGrey,
    paddingTop: 20,
    paddingHorizontal: 25,
  },
});
