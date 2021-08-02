import { observer } from "mobx-react";
import { useRoute } from "@react-navigation/native";
import * as React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { characterStore, store } from "../store/tamoNekiStore";

export const CharacterDetailScreen = observer(({ navigation }) => {
  //   const route = useRoute();

  //   React.useEffect(() => {
  //     store.fetchingCharacterMovies(store.state.charId);
  //   }, []);

  //   const {
  //     name,
  //     birth_year,
  //     eye_color,
  //     hair_color,
  //     mass,
  //     height,
  //     skin_color,
  //     gender,
  //   } = store.state.charDetails;
  //   return (
  //     <ScrollView
  //       style={{
  //         flex: 1,
  //         paddingLeft: 10,
  //         backgroundColor: "rgb(46, 49, 49)",
  //       }}
  //     >
  //       <Text style={styles.characterName}>{name}</Text>
  //       <Text style={styles.characterPodnaslovi}>Personal</Text>
  //       <Text style={styles.characterDrugo}>Gender: {gender}</Text>
  //       <Text style={styles.characterDrugo}>Brith Year: {birth_year}</Text>
  //       <Text style={styles.characterDrugo}>Height: {height} cm</Text>
  //       <Text style={styles.characterDrugo}>Mass: {mass} kg</Text>
  //       <Text style={styles.characterDrugo}>Eye Color: {eye_color}</Text>
  //       <Text style={styles.characterDrugo}>Hair Color: {hair_color}</Text>
  //       <Text style={styles.characterDrugo}>Skin Color: {skin_color}</Text>
  //       <Text style={styles.characterPodnaslovi}>Movies</Text>
  //       <View>
  //         {store.state.movies.map((movie, id) => {
  //           return (
  //             <View key={id}>
  //               {/* HOW TO AVOID PRETTIER? */}
  //               <Text style={styles.characterDrugo}>{movie}</Text>
  //             </View>
  //           );
  //         })}
  //       </View>
  //       <View style={{ flexDirection: "row" }}>
  //         <TouchableOpacity
  //           activeOpacity={0.5}
  //           onPress={() => {
  //             navigation.navigate("CharList");
  //           }}
  //           style={[
  //             styles.addToFavBtn,
  //             {
  //               marginHorizontal: 10,
  //               marginVertical: 20,
  //             },
  //           ]}
  //         >
  //           <Text style={styles.addToFavBtnText}>GO BACK</Text>
  //         </TouchableOpacity>
  //         <TouchableOpacity
  //           activeOpacity={0.5}
  //           onPress={() => {
  //             navigation.navigate("FavList");
  //             store.addChar(name);
  //           }}
  //           style={[
  //             styles.addToFavBtn,
  //             {
  //               backgroundColor: "yellow",
  //               marginHorizontal: 10,
  //               marginVertical: 20,
  //             },
  //           ]}
  //         >
  //           <Text
  //             style={[
  //               styles.addToFavBtnText,
  //               {
  //                 color: "black",
  //                 fontWeight: "bold",
  //               },
  //             ]}
  //           >
  //             ADD TO FAVORITES
  //           </Text>
  //         </TouchableOpacity>
  //       </View>
  //     </ScrollView>
  //   );
  // });

  return (
    <ScrollView
      style={{
        flex: 1,
        paddingLeft: 10,
        backgroundColor: "rgb(46, 49, 49)",
      }}
    >
      <Text style={styles.characterName}>
        {characterStore.selectedCharacter.name}
      </Text>
      {/* <Text style={styles.characterPodnaslovi}>Personal</Text>
      <Text style={styles.characterDrugo}>Gender: {gender}</Text>
      <Text style={styles.characterDrugo}>Brith Year: {birth_year}</Text>
      <Text style={styles.characterDrugo}>Height: {height} cm</Text>
      <Text style={styles.characterDrugo}>Mass: {mass} kg</Text>
      <Text style={styles.characterDrugo}>Eye Color: {eye_color}</Text>
      <Text style={styles.characterDrugo}>Hair Color: {hair_color}</Text>
      <Text style={styles.characterDrugo}>Skin Color: {skin_color}</Text>
      <Text style={styles.characterPodnaslovi}>Movies</Text> */}
      {/* <View>
        {store.state.movies.map((movie, id) => {
          return (
            <View key={id}>
              <Text style={styles.characterDrugo}>{movie}</Text>
            </View>
          );
        })}
      </View> */}
      {/* <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            navigation.navigate("CharList");
          }}
          style={[
            styles.addToFavBtn,
            {
              marginHorizontal: 10,
              marginVertical: 20,
            },
          ]}
        >
          <Text style={styles.addToFavBtnText}>GO BACK</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            navigation.navigate("FavList");
            store.addChar(name);
          }}
          style={[
            styles.addToFavBtn,
            {
              backgroundColor: "yellow",
              marginHorizontal: 10,
              marginVertical: 20,
            },
          ]}
        >
          <Text
            style={[
              styles.addToFavBtnText,
              {
                color: "black",
                fontWeight: "bold",
              },
            ]}
          >
            ADD TO FAVORITES
          </Text>
        </TouchableOpacity>
      </View> */}
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  characterName: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  characterPodnaslovi: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  characterDrugo: {
    fontSize: 20,
    color: "white",
  },
  addToFavBtn: {
    backgroundColor: "black",
    padding: 20,
    borderRadius: 10,
  },
  addToFavBtnText: {
    color: "white",
    alignSelf: "center",
    fontWeight: "bold",
  },
});
