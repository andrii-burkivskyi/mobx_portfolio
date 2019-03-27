import { observable, action, IObservableValue } from "mobx";

export default class ModalStore {
    constructor(isOpen: boolean = false) {
        this.isOpen = observable.box(isOpen);
    }

    @observable isOpen: IObservableValue<boolean>;

    @action open = () => {
        this.isOpen.set(true);
    }

    @action close = () => {
        this.isOpen.set(false);
    }

    @action toggle = () => {
        this.isOpen.set(!this.isOpen.get());
    }
}