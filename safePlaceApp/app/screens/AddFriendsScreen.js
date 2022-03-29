import { StyleSheet, Text, View } from "react-native";
import React from "react";
// import colors from "../app/config/colors";

import BigWidget from "../../components/BigWidget";

const AddFriendsScreen = ({ navigation }) => {
  return (
    <View>
      <BigWidget
        title="Add friends"
        secondarytitle="who do you want to add as friends"
        searchbar={true}
      />
    </View>
  );
};

export default AddFriendsScreen;

const styles = StyleSheet.create({});
