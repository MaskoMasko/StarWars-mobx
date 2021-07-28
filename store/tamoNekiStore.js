import { makeAutoObservable, observable, action, flow } from "mobx";

const state = observable({
  dataFetched: [],
  charDetails: undefined,
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

const selectedChar = action(function selectedChar(name) {
  state.charDetails = name;
});

export const tamoNekiStore = {
  state,
  fetchingData,
  addChar,
  selectedChar,
};
