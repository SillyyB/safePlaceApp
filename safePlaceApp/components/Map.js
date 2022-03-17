import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import React from "react";

//import all the components we are going to use.

import MapView, { Marker } from "react-native-maps";

const Map = ({ displayCurrentCoords }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Text>{displayCurrentCoords}</Text>
          <Marker
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324,
            }}
          ></Marker>
        </MapView>
      </View>
    </SafeAreaView>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 40,
  },
  map: {
    width: "100%",
    height: 250,
    borderRadius: 5,
  },
});
