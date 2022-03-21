import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../app/config/colors";
import UserComponent from "./UserComponent";

const FriendsTab = () => {
  return (
    <View style={styles.mainContainer}>
      <UserComponent
        name="ivan kunne"
        region="North-holland, hoogkarspel"
        selectButton={true}
      />
      <UserComponent name="liselottehsr" region="North-holland, amsterdam" />
      <UserComponent name="kevin braak" region="North-holland, hoorn" />
      <UserComponent name="silvb" region="North-holland, hoorn" />
    </View>
  );
};

export default FriendsTab;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.white,
    // paddingVertical: 10,
  },
});
