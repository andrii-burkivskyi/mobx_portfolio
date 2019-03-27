import { observable } from "mobx";
import { RouterStore } from 'mobx-react-router';
import PagesStore from "./Pages.store";
import ContainersStore from "./Containers.store";
import ModalsStore from "./Modals.store";

export class StateStore {
    @observable language: "en" | "ru" = "en";
    @observable router = new RouterStore();
    @observable modals = new ModalsStore();
    @observable containers = new ContainersStore()
    @observable pages = new PagesStore()
}

const store = new StateStore();

export default store;