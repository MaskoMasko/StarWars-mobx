import { makeAutoObservable, observable, action, flow } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";

const state = observable({
  dataFetched: [],
  charDetails: {
    name: undefined,
    birth_year: undefined,
    eye_color: undefined,
    films: undefined,
    gender: undefined,
    hair_color: undefined,
    height: undefined,
    mass: undefined,
    skin_color: undefined,
  },
  favCharList: [],
  favCharListClone: [],
  jsonObject: undefined,
  movies: [],
  charId: undefined,
  isLoading: false,
});

const saveValue = action(function saveValue() {
  AsyncStorage.setItem("neki_value", JSON.stringify(state.favCharList));
  alert("saved");
});

const getValue = action(function getValue() {
  AsyncStorage.getItem("neki_value").then((val) => {
    state.jsonObject = JSON.parse(val);
    for (let i = 0; i < state.jsonObject.length; i++) {
      if (state.favCharListClone.includes(state.jsonObject[i])) {
        return;
      }
      state.favCharListClone.push(state.jsonObject[i]);
      state.favCharList = state.favCharListClone;
    }
  });
});

// const saveValue = flow(function* saveValue() {
//   AsyncStorage.setItem("neki_value", JSON.stringify(state.favCharList));
//   alert("saved");
// });

// const getValue = flow(function* getValue() {
//   AsyncStorage.getItem("neki_value").then((val) => {
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
const fetchingData = flow(function* fetchingData(url) {
  state.isLoading = true;
  const res = yield fetch(url);
  const things = yield res.json();
  state.isLoading = false;
  state.dataFetched = things.results;
});

const fetchingCharacterMovies = flow(function* fetchingCharacterMovies(id) {
  for (let i = 0; i < state.dataFetched[id].films.length; i++) {
    const filmici = yield fetch(
      `${state.dataFetched[id].films[i]}?format=json`
    );
    const filmiciToJson = yield filmici.json();
    state.movies.push(filmiciToJson.title);
  }
});

const addChar = action(function addChar(name) {
  if (state.favCharList.includes(name)) {
    return;
  }
  state.favCharList.push(name);
});

const selectedChar = action(function selectedChar(
  name,
  birth_year,
  eye_color,
  hair_color,
  mass,
  height,
  skin_color,
  gender,
  films
) {
  state.charDetails.name = name;
  state.charDetails.birth_year = birth_year;
  state.charDetails.eye_color = eye_color;
  state.charDetails.hair_color = hair_color;
  state.charDetails.mass = mass;
  state.charDetails.height = height;
  state.charDetails.skin_color = skin_color;
  state.charDetails.gender = gender;
  state.charDetails.films = films;
});

export const store = {
  state,
  fetchingData,
  addChar,
  selectedChar,
  fetchingCharacterMovies,
  saveValue,
  getValue,
};
