import { makeAutoObservable, observable, action } from "mobx";

const state = observable({
  dataFetched: [],
});

const fetchingData = action(async function fetchingData(url) {
  const res = await fetch(url);
  const things = await res.json();
  state.dataFetched = things.results;
});

export const tamoNekiStore = {
  state,
  fetchingData,
};
