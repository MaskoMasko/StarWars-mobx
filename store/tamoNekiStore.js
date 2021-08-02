// import { makeAutoObservable, observable, action, flow, autorun } from "mobx";
import { types, flow } from "mobx-state-tree";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CharacterModel = types.model("Character", {
  url: types.identifier,
  name: types.optional(types.string, ""),
});
const Store = types
  .model("Store", {
    selectedCharacter: types.safeReference(CharacterModel),
    //safe refrence tornima charmodel koji ima taj identifier
    characterList: types.array(CharacterModel),
  })
  .actions((self) => {
    return {
      fetchData: flow(function* fetchData(url) {
        const result = yield fetch(url);
        const characterListData = yield result.json();
        for (let i = 0; i < characterListData.results.length; i++) {
          const character = characterListData.results[i];
          self.characterList.push({
            url: character.url,
            name: character.name,
          });
        }
      }),
    };
  })
  .actions((self) => {
    return {
      setSelecterCharacter(characterId) {
        // console.log(characterId);
        //char id je link i po njemu dobijes objekt
        //ki ima taj id dobije taj objekt
        self.selectedCharacter = characterId;
      },
    };
  });

export const characterStore = Store.create({
  characterList: [],
});

// const state = observable({
// dataFetched: [],
// charDetails: {
//   name: undefined,
//   birth_year: undefined,
//   eye_color: undefined,
//   films: undefined,
//   gender: undefined,
//   hair_color: undefined,
//   height: undefined,
//   mass: undefined,
//   skin_color: undefined,
// },
//   favoriteCharacterList: [],
//   jsonObject: undefined,
//   movies: [],
//   charId: undefined,
//   isLoading: false,
// });

// const getValue = flow(function* getValue() {
//   const rawFavoriteCharacterList = yield AsyncStorage.getItem(
//     "favorite character list"
//   );
//   try {
//     const favoriteCharacterList = JSON.parse(rawFavoriteCharacterList);

//     // Keep only unique character names
//     const uniqueCharacters = Array.from(
//       new Set([...state.favoriteCharacterList, ...favoriteCharacterList])
//     );
//     state.favoriteCharacterList = uniqueCharacters;
//   } catch (error) {
//     console.log(
//       "Error while parsing character list from async storage:",
//       error.message
//     );
//     yield AsyncStorage.removeItem("favorite character list");
//   }
// });

// onAppStart();

// async function onAppStart() {
//   await getValue();

//   autorun(function persistFavoriteCharacterList() {
//     AsyncStorage.setItem(
//       "favorite character list",
//       JSON.stringify(state.favoriteCharacterList)
//     );
//   });
// }

// const saveValue = action(function saveValue() {
//   AsyncStorage.setItem(
//     "favorite character list",
//     JSON.stringify(state.favoriteCharacterList)
//   );
//   alert("saved");
// });

// promise (bilo sta sta ima .then) mores awaitat / yield-at

// const saveValue = flow(function* saveValue() {
//   AsyncStorage.setItem("favorite character list", JSON.stringify(state.favCharList));
//   alert("saved");
// });

// const getValue = flow(function* getValue() {
//   AsyncStorage.getItem("favorite character list").then((val) => {
//     state.jsonObject = JSON.parse(val);
//     for (let i = 0; i < state.jsonObject.length; i++) {
//       if (state.favCharListClone.includes(state.jsonObject[i])) {
//         return;
//       }
//       state.favCharListClone.push(state.jsonObject[i]);
//       state.favCharList = state.favCharListClone;
//     }
//   });
// });

//await razbije strict-mode pa stavljamo flow i yelid - uz generator func
// const fetchingData = flow(function* fetchingData(url) {
//   state.isLoading = true;
//   const result = yield fetch(url);
//   const things = yield result.json();
//   state.isLoading = false;
//   state.dataFetched = things.results;
// });

// const fetchingCharacterMovies = flow(function* fetchingCharacterMovies(id) {
//   for (let i = 0; i < state.dataFetched[id].films.length; i++) {
//     const filmici = yield fetch(
//       `${state.dataFetched[id].films[i]}?format=json`
//     );
//     const filmiciToJson = yield filmici.json();
//     state.movies.push(filmiciToJson.title);
//   }
// });

// const addChar = action(function addChar(name) {
//   if (state.favoriteCharacterList.includes(name)) {
//     return;
//   }
//   state.favoriteCharacterList.push(name);
// });

// const removeCharFromFav = action(function removeCharFromFav(id) {
//   state.favoriteCharacterList.splice(id, 1);
// });

// const selectedChar = action(function selectedChar({
//   name,
//   birth_year,
//   eye_color,
//   hair_color,
//   mass,
//   height,
//   skin_color,
//   gender,
//   films,
// }) {
//   state.charDetails.name = name;
//   state.charDetails.birth_year = birth_year;
//   state.charDetails.eye_color = eye_color;
//   state.charDetails.hair_color = hair_color;
//   state.charDetails.mass = mass;
//   state.charDetails.height = height;
//   state.charDetails.skin_color = skin_color;
//   state.charDetails.gender = gender;
//   state.charDetails.films = films;
// });

// export const store = {
//   state,
//   fetchingData,
//   addChar,
//   selectedChar,
//   fetchingCharacterMovies,
//   saveValue,
//   getValue,
//   removeCharFromFav,
// };
