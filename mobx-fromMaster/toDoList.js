import { makeAutoObservable, observable, action } from "mobx";
import { types } from "mobx-state-tree";

const Stvar = types.model("Stvar", {
  name: types.string,
});

const StvarStore = types
  .model("StvarStore", {
    stvarList: types.array(Stvar),
  })
  .actions((self) => {
    return {
      addStvar(stvar) {
        self.stvarList.push(stvar);
      },

      removeStvar(stvarName) {
        const index = self.stvarList.findIndex((s) => s.name === stvarName);
        self.stvarList.splice(index, 1);
      },
    };
  });

export const stvarStore = StvarStore.create({
  stvarList: [{ name: "Prva stvar" }],
});
