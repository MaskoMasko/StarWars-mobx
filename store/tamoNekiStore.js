import { makeAutoObservable, observable, action, flow } from "mobx";

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
  movies: [],
  charId: undefined,
});

//await razbije strict-mode pa stavljamo flow i yelid - uz generator func
const fetchingData = flow(function* fetchingData(url) {
  const res = yield fetch(url);
  const things = yield res.json();
  state.dataFetched = things.results;
});

const fetchingCharacterMovies = flow(function* fetchingCharacterMovies(id) {
  for (let i = 0; i < state.dataFetched[id].films.length; i++) {
    state.movies.push(state.dataFetched[id].films[i]);
  }
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
};
