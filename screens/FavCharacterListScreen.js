import { disableExpoCliLogging } from "expo/build/logs/Logs";
import { observer } from "mobx-react";
import * as React from "react";
import {
  View,
  Text,
  ScrollView,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { store } from "../store/tamoNekiStore";

export const FavCharacterListScreen = observer(({ navigation }) => {
  return (
    <View
      style={[
        styles.charItemContainer,
        { flex: 1, alignItems: "center", justifyContent: "center" },
      ]}
    >
      <ScrollView>
        {store.state.favoriteCharacterList.length == 0 ? (
          <Text style={styles.emptyListText}>
            You Haven't Added Any Character To The List...
          </Text>
        ) : (
          store.state.favoriteCharacterList.map((char, id) => {
            return (
              <View
                key={id}
                style={[
                  styles.charListItem,
                  {
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "81%",
                    alignItems: "center",
                  },
                ]}
              >
                <Text style={styles.charListItemText}>{char}</Text>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => {
                    store.removeCharFromFav(id);
                  }}
                  style={{
                    padding: 10,
                    backgroundColor: "black",
                    borderRadius: 5,
                    margin: 5,
                  }}
                >
                  <Text style={{ color: "white", fontWeight: "bold" }}>
                    REMOVE
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })
        )}
      </ScrollView>
      {/* <Button title="Save List" onPress={() => store.saveValue()}></Button> */}
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.popToTop()}
        style={{
          backgroundColor: "black",
          padding: 20,
          borderRadius: 10,
          width: "60%",
          margin: 10,
        }}
      >
        <Text
          style={{
            color: "white",
            alignSelf: "center",
            fontSize: 22,
            fontWeight: "bold",
          }}
        >
          HOME
        </Text>
      </TouchableOpacity>
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
  emptyListText: {
    fontSize: 18,
    fontWeight: "bold",
    width: 200,
    textAlign: "center",
    color: "white",
    marginTop: 200,
  },
});
