import * as React from "react";
import {
  View,
  Text,
  Button,
  Modal,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

export function HomeScreen({ navigation }) {
  const [userName, setUserName] = React.useState("");
  const [loginModal, setLoginModal] = React.useState(true);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Modal visible={loginModal}>
        <View style={styles.nameModal}>
          <Image
            style={{ width: 300, marginBottom: 100, height: 200 }}
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/640px-Star_Wars_Logo.svg.png",
            }}
          ></Image>
          <TextInput
            style={styles.inputField}
            value={userName}
            placeholder="Enter Your Name"
            onChangeText={(e) => setUserName(e.replace(/ /g, ""))}
          ></TextInput>
          <TouchableOpacity
            style={styles.nameSubmitButton}
            activeOpacity={0.5}
            onPress={() => {
              userName !== ""
                ? setLoginModal(false)
                : Alert.alert("Enter Username");
            }}
          >
            <Text style={styles.nameSubmitButtonText}>SUBMIT NAME</Text>
          </TouchableOpacity>
        </View>
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

const styles = StyleSheet.create({
  nameModal: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  inputField: {
    padding: 10,
    margin: 5,
    borderRadius: 10,
    backgroundColor: "rgba(240, 240, 214, 1)",
  },
  nameSubmitButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "yellow",
    marginTop: 20,
  },
  nameSubmitButtonText: {
    color: "black",
    fontSize: 14,
    fontWeight: "bold",
  },
});
