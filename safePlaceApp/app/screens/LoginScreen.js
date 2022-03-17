import * as React from "react";
import { Button, View, Text, StyleSheet } from "react-native";

const LoginScreen = ({ navigation }) => {
  return (
    <View>
      <Text>LoginScreen</Text>

      <Button
        title="Go to homescreen"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
