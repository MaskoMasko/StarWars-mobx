import { observer } from "mobx-react";
import * as React from "react";
import { View, Text, ScrollView, Button } from "react-native";
import { tamoNekiStore } from "../store/tamoNekiStore";

export const FavCharacterListScreen = observer(({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ScrollView>
        {tamoNekiStore.state.favCharList.map((char, id) => {
          return <Text key={id}>{char}</Text>;
        })}
      </ScrollView>
      <Button title="GO to amin" onPress={() => navigation.popToTop()}></Button>
    </View>
  );
});
