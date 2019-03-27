import { observable } from "mobx";

import { ModalStore } from "./common";

export default class ModalsStore {
    @observable ContactMe: ModalStore = new ModalStore();
    @observable TopBarMenu: ModalStore = new ModalStore();
}