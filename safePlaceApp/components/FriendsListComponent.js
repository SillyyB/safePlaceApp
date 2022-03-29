import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../app/config/colors";

const FriendsListComponent = () => {
  return (
    <View style={styles.container}>
      <Text>FriendsListComponent</Text>
    </View>
  );
};

export default FriendsListComponent;

const styles = StyleSheet.create({
  container: {
    borderTopColor: colors.lightGrey,
    borderTopWidth: 1,
  },
});
