import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";

import MapView, { Marker } from "react-native-maps";

const Map = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <MapView
          loadingEnabled={true}
          showsUserLocation={true}
          followsUserLocation={true} // zoom in map, BUT cant move around
          userInterfaceStyle={"light"}
          style={styles.map}
        >
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
    alignItems: "center",
  },
  map: {
    width: "100%",
    height: 350,
    borderRadius: 5,
  },
});
