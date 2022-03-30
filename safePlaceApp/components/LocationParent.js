import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { useState, useEffect } from "react";
import Map from "./Map";
import HomeScreenWidget from "./HomeScreenWidget";
import * as Location from "expo-location";

const LocationParent = ({ navigation }) => {
  const [locationServiceEnabled, setLocationServiceEnabled] = useState(false);
  const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
    "Fetching your location..."
  );

  // coords
  const [displayCurrentLatitude, setDisplayCurrentlatitude] = useState(
    "Fetching your coordinates..."
  );
  const [displayCurrentLongitude, setDisplayCurrentLongitude] = useState(
    "Fetching your coordinates..."
  );

  // region
  const [displayCurrentRegion, setDisplayCurrentRegion] = useState(
    "Fetching your region..."
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
        let latitude = `latitude: ${coords.latitude}`;

        setDisplayCurrentlatitude(latitude);
      }

      for (let item of response) {
        let longitude = `longitude: ${coords.longitude}`;

        setDisplayCurrentLongitude(longitude);
      }

      for (let item of response) {
        if (Platform.OS === "ios") {
          let address = `${item.name}`;

          setDisplayCurrentAddress(address);
        } else if (Platform.OS === "android") {
          let address = `${item.street}`;

          setDisplayCurrentAddress(address);
        }
      }
      
      for (let item of response) {
        let region = `${item.region}, ${item.city}`;

        setDisplayCurrentRegion(region);
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
      <View>
        <Map
        // displayCurrentlatitude={displayCurrentLatitude}
        // displayCurrentLongitude={displayCurrentLongitude}
        />
      </View>
      <View style={styles.widgetContainer}>
        <HomeScreenWidget
          displayCurrentRegion={displayCurrentRegion}
          displayCurrentAddress={displayCurrentAddress}
          widgetTitle={"current location:"}
          navigation={navigation}
        />
      </View>
    </SafeAreaView>
  );
};

export default LocationParent;

const styles = StyleSheet.create({
  widgetContainer: {
    // flex: 1,

    width: "100%",
  },
});
