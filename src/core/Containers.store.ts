import { observable } from "mobx";
import { ContactMeStore } from "../containers/Modals/ContactMe/ContactMe.store";
import { TopBarStore } from "../containers/TopBar/TopBar.store";

export default class ContainersStore {
    @observable ContactMe?: ContactMeStore;
    @observable TopBar?: TopBarStore;
}