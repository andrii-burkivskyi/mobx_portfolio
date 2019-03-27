import { action, computed } from "mobx";
import state from "../../core/State.store";

export class TopBarStore {

    @action toggleContactMeModal = () => {
        this.menu.close();
        state.modals.ContactMe.toggle();
    }

    @computed get menu() {
        return state.modals.TopBarMenu;
    }
}

if (!state.containers.TopBar) {
    state.containers.TopBar = new TopBarStore();
}

export default state.containers.TopBar as TopBarStore;
