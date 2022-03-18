import * as React from "react";
import { Button, View, Text, StyleSheet } from "react-native";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.Login}>
      <Text>Login</Text>

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
