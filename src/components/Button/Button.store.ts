import { observable, action } from "mobx";

interface InitProps {
    isDisplayed?: ButtonStore["isDisplayed"];
    isDisabled?: ButtonStore["isDisabled"];
}

export default class ButtonStore {
    constructor(props?: InitProps) {
        this.isDisplayed = props && props.isDisplayed || true;
        this.isDisabled = props && props.isDisabled || false;
    }

    @action setIsDisplayed = (isDisplayed: boolean) => this.isDisplayed = isDisplayed;
    @action setIsDisabled = (isDisabled: boolean) => this.isDisabled = isDisabled;

    @observable isDisplayed: boolean;
    @observable isDisabled: boolean;
}