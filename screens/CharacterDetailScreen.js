import { observer } from "mobx-react";
import * as React from "react";
import { View, Text, Button } from "react-native";
import { store } from "../store/tamoNekiStore";

export const CharacterDetailScreen = observer(({ navigation }) => {
  const {
    name,
    birth_year,
    eye_color,
    hair_color,
    mass,
    height,
    skin_color,
    homeworld,
    gender,
  } = store.state.charDetails;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{name}</Text>
      <Text>{birth_year}</Text>
      <Text>{eye_color}</Text>
      <Text>{hair_color}</Text>
      <Text>{mass}</Text>
      <Text>{height}</Text>
      <Text>{skin_color}</Text>
      <Text>{homeworld}</Text>
      <Text>{gender}</Text>
      <Button
        title="add ot fav"
        onPress={() => {
          navigation.navigate("FavList");
          store.addChar(name);
        }}
      ></Button>
    </View>
  );
});
