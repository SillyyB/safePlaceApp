import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import BigMap from "../../components/BigMap";
import BigWidget from "../../components/BigWidget";
import colors from "../config/colors";

const ShareScreen = ({ navigation }) => {
  // const [users, setUsers] = useState([
  //   { username: "Silvb", password: "Welkom123", key: 1 },
  // ]);

  // function handleAddNewUser() {
  //   const updateUsers = [
  //     // copy the current users state
  //     ...users,
  //     {
  //       // using the length of the array for a unique id
  //       key: users.length + 1,
  //       username: "Steve",
  //       password: "member",
  //     },
  //   ];
  //   // update the state to the updatedUsers
  //   setUsers(updateUsers);
  // }

  return (
    <View>
      <ScrollView>
        <View style={styles.mapContainer}>
          <BigMap />
        </View>

        <View>
          <BigWidget
            title="Your friends"
            secondarytitle="3 friends"
            textcolour={colors.green}
            navigation={navigation}
          />
        </View>
        {/* {users.map((user) => (
        <View key={user.key}>
          <Text>{user.username}</Text>
          <Text>{user.key}</Text>
        </View>
      ))}

      <TouchableOpacity onPress={handleAddNewUser}>
        <Text>Add user</Text>
      </TouchableOpacity> */}
      </ScrollView>
    </View>
  );
};

export default ShareScreen;

const styles = StyleSheet.create({});
