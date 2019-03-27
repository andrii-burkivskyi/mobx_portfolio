import state from "../../../core/State.store";

export class UIKitRootStore { }

if (!state.pages.UIKit) {
    state.pages.UIKit = new UIKitRootStore();
}

export default state.pages.UIKit as UIKitRootStore;
