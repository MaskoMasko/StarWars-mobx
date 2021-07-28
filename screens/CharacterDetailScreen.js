import { observer } from "mobx-react";
import * as React from "react";
import { View, Text, Button } from "react-native";
import { tamoNekiStore } from "../store/tamoNekiStore";

export const CharacterDetailScreen = observer(({ navigation }) => {
  const name = tamoNekiStore.state.charDetails;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{name}</Text>
      <Button
        title="add ot fav"
        onPress={() => {
          navigation.navigate("FavList");
          tamoNekiStore.addChar(name);
        }}
      ></Button>
    </View>
  );
});
