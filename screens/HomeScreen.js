import * as React from "react";
import { View, Text, Button, Modal, TextInput } from "react-native";

export function HomeScreen({ navigation }) {
  const [userName, setUserName] = React.useState("");
  const [loginModal, setLoginModal] = React.useState(true);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Modal visible={loginModal}>
        <TextInput
          placeholder="Enter Usename"
          value={userName}
          onChangeText={(e) => setUserName(e)}
        ></TextInput>
        <Button title="submit" onPress={() => setLoginModal(false)}></Button>
      </Modal>
      <Text>Hello {userName}!</Text>
      <Button
        title="Go To CharcterList Screen"
        onPress={() => navigation.navigate("CharList")}
      ></Button>
      <Button
        title="Go To FavCharcterList Screen"
        onPress={() => navigation.navigate("FavList")}
      ></Button>
    </View>
  );
}
