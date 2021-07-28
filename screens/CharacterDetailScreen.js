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
    gender,
  } = store.state.charDetails;
  return (
    <View style={{ flex: 1 }}>
      <Text>{name}</Text>
      <Text>Personal</Text>
      <Text>Gender: {gender}</Text>
      <Text>Brith Year: {birth_year}</Text>
      <Text>Height: {height} cm</Text>
      <Text>Mass: {mass} kg</Text>
      <Text>Eye Color: {eye_color}</Text>
      <Text>Hair Color: {hair_color}</Text>
      <Text>Skin Color: {skin_color}</Text>
      <Text>Movies</Text>
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
