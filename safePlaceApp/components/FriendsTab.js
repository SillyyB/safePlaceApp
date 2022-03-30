import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import colors from "../app/config/colors";
import UserComponent from "./UserComponent";

const FriendsTab = ({ navigation }) => {
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

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>Start sharing</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FriendsTab;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.white,
    borderTopColor: colors.lightGrey,
    borderTopWidth: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 30,
  },
  button: {
    borderColor: colors.green,
    borderWidth: 1,
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
    width: "60%",
  },
  buttonText: {
    color: colors.green,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
