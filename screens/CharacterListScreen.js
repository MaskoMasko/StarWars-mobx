import * as React from "react";
import { View, Text, Button, ScrollView } from "react-native";
import { tamoNekiStore } from "../store/tamoNekiStore";
import { observer } from "mobx-react";

export const CharacterListScreen = observer(({ navigation }) => {
  const url = "https://swapi.dev/api/people/?format=json";

  React.useEffect(() => {
    tamoNekiStore.fetchingData(url);
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>obicna lista</Text>
      <ScrollView>
        {tamoNekiStore.state.dataFetched.map((char, id) => {
          const { name } = char;
          return <Text key={id}>{name}</Text>;
        })}
      </ScrollView>
      <Button
        title="char detail screen"
        onPress={() => navigation.navigate("CharDetail")}
      ></Button>
    </View>
  );
});
