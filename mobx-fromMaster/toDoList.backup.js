import { makeAutoObservable } from "mobx";

class ToDoList {
  constructor() {
    makeAutoObservable(this);
  }

  listaStvari = [];

  addTask = (task) => {
    this.listaStvari = [...this.listaStvari, task];
  };
  removeTaskHandler = (id) => {
    var clone = [...this.listaStvari];
    console.log("LISTA BEFORE:", clone);
    clone.splice(id, 1);
    this.listaStvari = clone;
    console.log("LISTA AFTER: ", this.listaStvari);
    return this.listaStvari;
  };
}

export const toDoListStore = new ToDoList();
