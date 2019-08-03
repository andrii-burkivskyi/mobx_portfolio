import React from "react";
import { observable, action, computed, set, IObservableValue } from "mobx";

import { validate, ValidationType } from "utils/validation";
import { getStringWithValues } from "utils/strings";
import { KeyCode } from "utils/keyboard";

import { FormFieldProps } from "../Form.store";
import { TabIndex } from "../Form.types";

enum InputType {
    TEXT = "text",
    EMAIL = "email",
    PASSWORD = "password",
    SEARCH = "search",
    URL = "url",
    NUMBER = "number"
}

interface InitNumberProps {
    type: InputType.NUMBER;
    defaultValue?: InputStore["defaultValue"];
    label?: InputStore["label"];
    placeholder?: InputStore["placeholder"];
    validations?: InputStore["validations"];
    mask?: InputStore["mask"];
    shouldDisplayed?: InputStore["shouldDisplayed"];
    isReadOnly?: InputStore["isReadOnly"];
    isDisabled?: InputStore["isDisabled"];
    onSubmit?: InputStore["onSubmit"];
    min?: InputStore["min"];
    max?: InputStore["max"];
    scale?: InputStore["scale"];
    signed?: InputStore["signed"];
    thousandsSeparator?: InputStore["thousandsSeparator"];
    radix?: InputStore["radix"];
}
interface InitCommonProps {
    type?: InputType.TEXT | InputType.EMAIL | InputType.PASSWORD | InputType.SEARCH | InputType.URL;
    defaultValue?: InputStore["defaultValue"];
    label?: InputStore["label"];
    placeholder?: InputStore["placeholder"];
    validations?: InputStore["validations"];
    mask?: InputStore["mask"];
    shouldDisplayed?: InputStore["shouldDisplayed"];
    isReadOnly?: InputStore["isReadOnly"];
    isDisabled?: InputStore["isDisabled"];
    onSubmit?: InputStore["onSubmit"];
}

type InitProps = InitCommonProps | InitNumberProps;

interface MaskObject { unmaskedValue: string; };

export default class InputStore implements FormFieldProps {
    static type = InputType;

    constructor(props?: InitProps) {
        if (props) {
            this.value = props.defaultValue || this.defaultValue;
            this.publicValue = props.defaultValue || this.defaultValue;
            this.mask = props.type === InputStore.type.NUMBER
                ? Number
                : undefined;
            set(this, props)
        }
    }

    @observable name: string = "defaultName";
    @observable label?: string | IObservableValue<string>;
    @observable type: InputType = InputStore.type.TEXT;
    @observable value: string = "";
    @observable publicValue: string = "";
    @observable placeholder: string = "";
    @observable defaultValue: string = "";
    @observable validations: Array<ValidationType> = [];
    @observable mask?: string | CommonMap[] | CommonMap;

    @observable shouldDisplayed: boolean = true;
    @observable isReadOnly: boolean = false;
    @observable isDisabled: boolean = false;

    @observable isFocused: boolean = false;
    @observable shouldValidate: boolean = false;
    @observable onSubmit?: () => void;

    @observable min?: number;
    @observable max?: number;
    @observable scale: number = 2;
    @observable signed: boolean = true;
    @observable thousandsSeparator: string = " ";
    @observable radix: string = ",";

    @computed get formValue(): string {
        return this.value;
    }

    @computed get tabIndex(): number {
        return this.isDisabled || this.isReadOnly ? TabIndex.Disabled : TabIndex.Regular;
    }

    @computed get publicType(): InputType {
        return this.type === InputStore.type.NUMBER
            ? InputStore.type.TEXT
            : this.type;
    }

    @computed get error(): string {
        const [error, values] = validate(this.value, this.validations)
        return getStringWithValues(error, values);
    }

    @computed get isTouched(): boolean {
        return this.value !== this.defaultValue;
    }

    @computed get isError(): boolean {
        return Boolean(this.error);
    }

    @computed get shouldDisplayError(): boolean {
        return this.shouldValidate && Boolean(this.error);
    }

    @action update = (props: Partial<InitProps> & { value?: string }) => {
        const { value, defaultValue, ...restProps } = props;
        this.value = value || defaultValue || this.value;
        this.publicValue = value || defaultValue || this.value;
        this.defaultValue = defaultValue || this.defaultValue;
        set(this, restProps)
    }

    @action reset = () => {
        this.value = this.defaultValue;
        this.publicValue = this.defaultValue;
        this.shouldValidate = false;
    }

    @action clear = () => {
        this.value = "";
        this.publicValue = "";
        this.shouldValidate = false;
    }

    @action change = (value: string) => {
        this.value = value;
        this.publicValue = value;
    }

    /**
     * Technical method for react-imask
     */
    @action commit = (value: string, mask: MaskObject) => {
        if (this.mask) {
            this.value = mask.unmaskedValue;
            this.publicValue = value;
        }
    }

    /**
     * Method increment value of input with type number
     * 
     * @remarks
     * This method do nothing if `InputStore.type` differs from `NUMBER`
     */
    @action increment = () => {
        if (this.type === InputStore.type.NUMBER) {
            this.publicValue = String(Number(this.value) + 1);
        }
    }

    /**
     * Method decrement value of input with type number
     * 
     * @remarks
     * This method do nothing if `InputStore.type` differs from `NUMBER`
     */
    @action decrement = () => {
        if (this.type === InputStore.type.NUMBER) {
            this.publicValue = String(Number(this.value) - 1);
        }
    }

    /**
     * Technical method for controlled input
     * 
     * @remarks
     * This method do nothing if `InputStore.mask` is set
     */
    @action onChange = (event: React.FormEvent<HTMLInputElement>) => {
        if (!this.mask) {
            this.value = event.currentTarget.value;
            this.publicValue = event.currentTarget.value;
        }
    }

    /**
     * Technical method for controlled input
     * 
     * @remarks
     * This method do nothing if `InputStore.mask` is not set
     */
    @action onAccept = (value: string, mask: MaskObject) => {
        if (this.mask) {
            this.value = mask.unmaskedValue;
            this.publicValue = value;
        }
    }

    @action focus = () => {
        this.isFocused = true;
    }

    @action blur = () => {
        this.isFocused = false;
        this.shouldValidate = true;
    }

    /**
     * Technical method for implementing submit on `enter` mechanic
     */
    @action onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (this.onSubmit && event.keyCode === KeyCode.ENTER) {
            event.preventDefault();
            event.stopPropagation();
            this.onSubmit();
        }
    }
}