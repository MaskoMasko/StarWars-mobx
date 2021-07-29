import { sortedIndex } from "lodash";
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
      {store.state.isLoading ? (
        <Text style={{ fontSize: 24, color: "white", fontWeight: "bold" }}>
          Loading...
        </Text>
      ) : (
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
                  store.selectedChar({
                    name,
                    birth_year,
                    eye_color,
                    hair_color,
                    mass,
                    height,
                    skin_color,
                    gender,
                  });
                  store.state.charId = id;
                  store.state.movies = [];
                }}
                key={id}
                style={styles.charListItem}
                activeOpacity={0.5}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text style={styles.charListItemText}>{name}</Text>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => {
                      store.addChar(name);
                      navigation.navigate("FavList");
                    }}
                    style={{
                      padding: 10,
                      backgroundColor: "black",
                      borderRadius: 5,
                      margin: 5,
                    }}
                  >
                    <Text style={{ color: "white", fontWeight: "bold" }}>
                      FAVORITE
                    </Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      )}
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
