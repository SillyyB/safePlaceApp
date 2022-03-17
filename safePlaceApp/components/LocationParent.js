import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { useState, useEffect } from "react";
import Map from "./Map";
import HomeScreenWidget from "./HomeScreenWidget";
import * as Location from "expo-location";

const LocationParent = () => {
  const [locationServiceEnabled, setLocationServiceEnabled] = useState(false);
  const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
    "Fetching your location..."
  );
  const [displayCurrentCoords, setDisplayCurrentCoords] = useState(
    "Fetching your location..."
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
        let latitude = `${coords.latitude}`;

        setDisplayCurrentCoords(latitude);
      }

      for (let item of response) {
        let address = `${item.name}, ${item.region} - ${item.city}`;

        setDisplayCurrentAddress(address);
      }
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
    <SafeAreaView>
      <View style={styles.mapContainer}>
        <Map displayCurrentCoords={displayCurrentCoords} />
      </View>
      <View style={styles.widgetContainer}>
        <HomeScreenWidget displayCurrentAddress={displayCurrentAddress} />
      </View>
      {/* <Text>{displayCurrentCoords}</Text> */}
    </SafeAreaView>
  );
};

export default LocationParent;

const styles = StyleSheet.create({
  // MAP
  mapContainer: {
    // position: "absolute",
  },
  widgetContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
