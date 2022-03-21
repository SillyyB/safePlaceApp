import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

import colors from "../app/config/colors";

const UserComponent = ({ name, region, selectButton }) => {
  const [activeUser, setActiveUser] = useState("white");
  const onPressUser = () => {
    setActiveUser("#F2F2F2");
  };

  const [activeText, setActiveText] = useState("#B3B3B3");
  const onPressUser2 = () => {
    setActiveText("#646464");
  };

  const handleBothFunctions = () => {
    onPressUser(), onPressUser2();
  };

  if (selectButton === true) {
    return (
      <TouchableOpacity onPress={handleBothFunctions}>
        <View
          style={[
            styles.mainContainer,
            styles.activeUser,
            { backgroundColor: activeUser },
          ]}
        >
          <View>
            <View style={styles.avatar}></View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={styles.namesContainer}>
              <Text style={styles.username}>{name}</Text>
              <Text
                style={[
                  styles.region,
                  styles.setActiveText,
                  { color: activeText },
                ]}
              >
                {region}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity onPress={handleBothFunctions}>
      <View
        style={[
          styles.mainContainer,
          styles.activeUser,
          { backgroundColor: activeUser },
        ]}
      >
        <View>
          <View style={styles.avatar}></View>
        </View>
        <View style={styles.namesContainer} onPress={onPressUser2}>
          <Text style={styles.username}>{name}</Text>
          <Text
            style={[styles.region, styles.setActiveText, { color: activeText }]}
          >
            {region}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default UserComponent;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,

    // borderBottomColor: colors.lightGrey,
    // borderBottomWidth: 1,
  },
  avatar: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondaryBackground,
    borderRadius: 50,
  },
  namesContainer: {
    paddingLeft: 15,
  },
  username: {
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: colors.primary,
    paddingBottom: 8,
  },
  region: {
    fontSize: 11,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: colors.lightGrey,
  },
  activeUser: {
    backgroundColor: colors.lightGrey,
  },
  activeText: {
    color: colors.darkGrey,
  },
});
