import { observer } from "mobx-react";
import * as React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { tamoNekiStore } from "../store/tamoNekiStore";

export const CharacterListScreen = observer(({ navigation }) => {
  const url = "https://swapi.dev/api/people/?format=json";

  React.useEffect(() => {
    tamoNekiStore.fetchingData(url);
  }, []);

  return (
    <ScrollView>
      {tamoNekiStore.state.dataFetched.map((char, id) => {
        const { name } = char;
        return (
          <TouchableOpacity
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
