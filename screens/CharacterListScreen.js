import { observer } from "mobx-react";
import * as React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { store } from "../store/tamoNekiStore";

export const CharacterListScreen = observer(({ navigation }) => {
  const url = "https://swapi.dev/api/people/?format=json";

  React.useEffect(() => {
    store.fetchingData(url);
  }, []);

  return (
    <ScrollView>
      {store.state.dataFetched.map((char, id) => {
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
        } = char;
        return (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("CharDetail");
              store.selectedChar(
                name,
                birth_year,
                eye_color,
                hair_color,
                mass,
                height,
                skin_color,
                homeworld,
                gender
              );
            }}
            key={id}
            style={{ width: 200, height: 200, backgroundColor: "red" }}
          >
            <Text>{name}</Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
});
