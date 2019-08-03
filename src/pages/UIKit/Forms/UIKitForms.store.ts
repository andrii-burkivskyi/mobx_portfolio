import { observable, observe } from "mobx";
import state from "../../../core/State.store";
import { InputSectionStore } from "./containers/InputSection/InputSection.store";
import { TextAreaSectionStore } from "./containers/TextAreaSection/TextAreaSection.store";

export class UIKitFormsStore {
    constructor() {
        observe(this.inputSection.standardInput, "value", (change) => {
            if (change.newValue === "lol") {
                state.language = "ru";
            }
            else {
                state.language = "en";
            }
        })
    }
    @observable title: string = "UI Kit | forms";

    @observable inputSection = new InputSectionStore();
    @observable textAreaSection = new TextAreaSectionStore();
}

if (!state.pages.UIKitForms) {
    state.pages.UIKitForms = new UIKitFormsStore();
}

export default state.pages.UIKitForms as UIKitFormsStore;
