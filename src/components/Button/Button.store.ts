import { observable } from "mobx";

interface InitProps {
    isDisplayed?: ButtonStore["isDisplayed"];
    isDisabled?: ButtonStore["isDisabled"];
}

export default class ButtonStore {
    constructor(props?: InitProps) {
        this.isDisplayed = props && props.isDisplayed || true;
        this.isDisabled = props && props.isDisabled || false;
    }

    @observable isDisplayed: boolean;
    @observable isDisabled: boolean;
}