import { makeAutoObservable, observable, action, flow } from "mobx";

const state = observable({
  dataFetched: [],
  charDetails: {
    name: undefined,
    birth_year: undefined,
    eye_color: undefined,
    // films: undefined,
    gender: undefined,
    hair_color: undefined,
    height: undefined,
    homeworld: undefined,
    mass: undefined,
    skin_color: undefined,
  },
  favCharList: [],
});

//await razbije strict-mode pa stavljamo flow i yelid - uz generator func
const fetchingData = flow(function* fetchingData(url) {
  const res = yield fetch(url);
  const things = yield res.json();
  state.dataFetched = things.results;
});

const addChar = action(function addChar(name) {
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
  homeworld,
  gender
) {
  state.charDetails.name = name;
  state.charDetails.birth_year = birth_year;
  state.charDetails.eye_color = eye_color;
  state.charDetails.hair_color = hair_color;
  state.charDetails.mass = mass;
  state.charDetails.height = height;
  state.charDetails.skin_color = skin_color;
  state.charDetails.homeworld = homeworld;
  state.charDetails.gender = gender;
});

export const store = {
  state,
  fetchingData,
  addChar,
  selectedChar,
};
