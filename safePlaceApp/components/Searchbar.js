import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../app/config/colors";

const Searchbar = () => {
  return (
    <View style={styles.container}>
      <Text>Searchbar</Text>
    </View>
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  container: { backgroundColor: colors.extraLightGrey },
});
