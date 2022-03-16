import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import colors from "../app/config/colors";

import * as Location from "expo-location";

const HomeScreenWidget = ({ navigation }) => {
  const name = "Ivan";

  const [locationServiceEnabled, setLocationServiceEnabled] = useState(false);
  const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
    "Wait, we are fetching you location..."
  );

  useEffect(() => {
    CheckIfLocationEnabled();
    GetCurrentLocation();
  }, []);

  // create the handler method

  const GetCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permission not granted",
        "Allow the app to use location service.",
        [{ text: "OK" }],
        { cancelable: false }
      );
    }

    let { coords } = await Location.getCurrentPositionAsync();

    if (coords) {
      const { latitude, longitude } = coords;
      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      for (let item of response) {
        let address = `${item.name}, ${item.city}, ${item.region}`;

        setDisplayCurrentAddress(address);
      }

      // for (let item of response) {

      //   setDisplayCurrentAddress(address);
      // }
    }
  };

  const CheckIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();

    if (!enabled) {
      Alert.alert(
        "Location Service not enabled",
        "Please enable your location services to continue",
        [{ text: "OK" }],
        { cancelable: false }
      );
    } else {
      setLocationServiceEnabled(enabled);
    }
  };

  return (
    <KeyboardAvoidingView>
      <View style={styles.container}>
        <Text style={styles.currentLocation}>current location:</Text>

        <View style={styles.placeContainer}>
          <Text style={styles.streetName}>{displayCurrentAddress}</Text>
          <Text style={styles.placeName}>{displayCurrentAddress}</Text>
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
