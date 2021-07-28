import { observer } from "mobx-react";
import * as React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { store } from "../store/tamoNekiStore";

export const CharacterListScreen = observer(({ navigation }) => {
  const url = "https://swapi.dev/api/people/?format=json";

  React.useEffect(() => {
    store.fetchingData(url);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgb(46, 49, 49)",
      }}
    >
      <ScrollView style={styles.charItemContainer}>
        {store.state.dataFetched.map((char, id) => {
          const {
            name,
            birth_year,
            eye_color,
            hair_color,
            mass,
            height,
            skin_color,
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
                  gender
                );
              }}
              key={id}
              style={styles.charListItem}
              activeOpacity={0.5}
            >
              <Text style={styles.charListItemText}>{name}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
});

const styles = StyleSheet.create({
  charItemContainer: {
    width: "100%",
    backgroundColor: "rgb(46, 49, 49)",
  },
  charListItem: {
    marginHorizontal: "3%",
    width: "94%",
    height: 50,
    backgroundColor: "yellow",
    margin: 15,
    borderRadius: 10,
    justifyContent: "center",
  },
  charListItemText: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
});
