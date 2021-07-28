import { makeAutoObservable, observable, action } from "mobx";

const state = observable({
  listaStvari: [],
});

const addTask = action(function addTask(task) {
  state.listaStvari.push(task);
});

const removeTaskHandler = action(function removeTaskHandler(id) {
  state.listaStvari.splice(id, 1);
});

export const toDoListStore = {
  state,
  addTask,
  removeTaskHandler,
};
