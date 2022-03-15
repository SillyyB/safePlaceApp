import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";
import React from "react";
import colors from "../app/config/colors";

const HomeScreenWidget = () => {
  return (
    <KeyboardAvoidingView>
      <View style={styles.container}>
        <Text>curr</Text>

        <View>
          <Text>Crabstraat 11</Text>
          <Text>Noord-Holland, Hoorn</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default HomeScreenWidget;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginTop: 30,
    borderRadius: 5,
    padding: 12,
  },
});
