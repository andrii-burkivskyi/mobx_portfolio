import { observable } from "mobx";
import { CVStore } from "../pages/CV/CV.store";
import { UIKitFormsStore } from "../pages/UIKit/Forms/UIKitForms.store";
import { UIKitRootStore } from "../pages/UIKit/Root/UIKitRoot.store";

export default class PagesStore {
    @observable CV?: CVStore;
    @observable UIKit?: UIKitRootStore;
    @observable UIKitForms?: UIKitFormsStore;
}