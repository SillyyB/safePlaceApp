import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import colors from "../app/config/colors";

const HomeScreenWidget = ({ displayCurrentAddress, displayCurrentRegion }) => {
  return (
    <KeyboardAvoidingView>
      <View style={styles.container}>
        <Text style={styles.currentLocation}>current location:</Text>

        <View style={styles.placeContainer}>
          <Text style={styles.streetName}>{displayCurrentAddress}</Text>
          <Text style={styles.placeName}>{displayCurrentRegion}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Start sharing</Text>
          </TouchableOpacity>
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
    padding: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.35,
    shadowRadius: 2,

    elevation: 2,
  },
  currentLocation: {
    fontSize: 12,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: colors.darkGrey,
    paddingBottom: 10,
  },
  placeContainer: {
    paddingBottom: 25,
  },
  streetName: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: colors.primary,
    paddingBottom: 5,
  },
  placeName: {
    fontSize: 12,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: colors.lightGrey,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: colors.primary,
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
    width: "60%",
  },
  buttonText: {
    color: colors.white,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
