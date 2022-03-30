import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  ActivityIndicator,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import colors from "../app/config/colors";

const Searchbar = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <TextInput style={styles.Searchbarcontainer} placeholder="Search" />
      </View>
    </KeyboardAvoidingView>
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  container: { backgroundColor: colors.white },
  Searchbarcontainer: {
    backgroundColor: colors.extraLightGrey,
    marginHorizontal: 25,
    marginVertical: 20,
    paddingVertical: 15,
    borderRadius: 15,
    fontSize: 14,
  },
});
