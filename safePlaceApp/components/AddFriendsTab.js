import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import colors from "../app/config/colors";

const AddFriendsTab = ({ navigation }) => {
  return (
    <View style={styles.addFriendsContainer}>
      <Text style={styles.instructions}>
        Add friends to share your location with!
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("addfriends")}
        >
          <Text style={styles.buttonText}>Add friends</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddFriendsTab;

const styles = StyleSheet.create({
  addFriendsContainer: {
    flex: 1,
    alignItems: "center",
    borderTopColor: colors.lightGrey,
    borderTopWidth: 1,
  },
  instructions: {
    fontSize: 12,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: colors.darkGrey,
    marginTop: 30,
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  button: {
    backgroundColor: colors.green,
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
