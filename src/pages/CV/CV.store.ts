import { action, observable } from "mobx";
import state from "../../core/State.store";
import { MapStore } from "../../core/common/index";

import * as api from "../../api"
import { UserProfile } from "../../api/cv.d"

export class CVStore {
    @observable title: string = "CV | Andrii Burkivskyi";
    @observable userProfile: MapStore<UserProfile, UserProfile> = new MapStore<UserProfile, UserProfile>({
        request: () => api.getUserProfile()
    });

    @action init = () => { this.userProfile.fetch(); }
}

if (!state.pages.CV) {
    state.pages.CV = new CVStore();
}

export default state.pages.CV as CVStore;
