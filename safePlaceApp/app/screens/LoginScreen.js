import * as React from "react";
import { Button, View, Text, StyleSheet } from "react-native";

import Logo from "../../components/Logo";

const LoginScreen = ({ navigation }) => {
  return (
    <View>
      <Logo />

      <Button
        title="Go to homescreen"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  Login: {
    fontSize: 32,
    fontWeight: "bold",
    paddingTop: 60,
  },
});
