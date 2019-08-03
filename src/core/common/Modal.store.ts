import { observable, action, IObservableValue } from "mobx";

interface ModalProps {
    isOpen: ModalStore["isOpen"]
}

export default class ModalStore {
    constructor(props?: ModalProps) {
        if (props) {
            this.isOpen = props.isOpen;
        }
    }

    @observable isOpen: boolean = false;

    @action open = () => {
        this.isOpen = true;
    }

    @action close = () => {
        this.isOpen = false;
    }

    @action toggle = () => {
        this.isOpen = !this.isOpen;
    }
}