import { StyleSheet, Text, View, Dimensions } from "react-native";
import * as React from "react";

import MapView from "react-native-maps";

const Map = () => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
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
