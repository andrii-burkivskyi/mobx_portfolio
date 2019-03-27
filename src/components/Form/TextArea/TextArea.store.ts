import React, { CSSProperties } from "react";
import { observable, action, computed, set, IObservableValue } from "mobx";
import { FormFieldProps } from "../Form.store";
import { ValidationType, validate } from "../../../utils/validation";
import { getStringWithValues } from "../../../utils/strings";
import { KeyCode } from "../../../utils/keyboard";
import { get } from "get-optional";
import { TabIndex } from "../Form.d";

interface InitProps {
    defaultValue?: TextAreaStore["defaultValue"];
    label?: TextAreaStore["label"];
    placeholder?: TextAreaStore["placeholder"];
    validations?: TextAreaStore["validations"];

    shouldDisplayed?: TextAreaStore["shouldDisplayed"];
    isReadOnly?: TextAreaStore["isReadOnly"];
    isDisabled?: TextAreaStore["isDisabled"];

    onSubmit?: TextAreaStore["onSubmit"];
}

export default class TextAreaStore implements FormFieldProps {
    constructor(props?: InitProps) {
        if (props) {
            this._value = props.defaultValue || this.defaultValue;
            set(this, props);
        }
    }

    @observable name: string = "defaultName";
    @observable private _value: string = "";
    @observable defaultValue: string = "";
    @observable label: string = "";
    @observable placeholder: string = "";
    @observable validations: Array<ValidationType> = [];
    @observable fieldContainerRef: React.RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>();
    @observable fieldRef: React.RefObject<HTMLTextAreaElement> = React.createRef<HTMLTextAreaElement>();
    @observable private _fieldHeight?: number;
    @observable private _fieldContainerHeight?: number;

    @observable shouldDisplayed: IObservableValue<boolean> = observable.box(
        true
    );
    @observable isReadOnly: IObservableValue<boolean> = observable.box(false);
    @observable isDisabled: IObservableValue<boolean> = observable.box(false);

    @observable onSubmit?: () => void;

    @observable isFocused: boolean = false;
    @observable shouldValidate: boolean = false;

    @computed get value(): string {
        return this._value;
    }

    @computed get formValue(): string {
        return this._value;
    }

    @computed get tabIndex(): number {
        return this.isDisabled.get() || this.isReadOnly.get()
            ? TabIndex.Disabled
            : TabIndex.Regular;
    }

    @computed get error(): string {
        const [error, values] = validate(this._value, this.validations);
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

    @computed get scrollbarStyle(): Partial<CSSProperties> {
        return { height: this._fieldContainerHeight };
    }
    j;

    @computed get fieldStyle(): Partial<CSSProperties> {
        return { height: this._fieldHeight };
    }

    @action init = () => {
        this._fieldContainerHeight = get(
            this.fieldContainerRef.current,
            "offsetHeight"
        );
        this._fieldHeight = get(this.fieldRef.current, "scrollHeight");
    };

    @action update = (props: Partial<InitProps> & { value?: string }) => {
        const { value, ...restProps } = props;
        this._value = value || this.value;
        set(this, restProps);
    };

    @action reset = () => {
        this._value = this.defaultValue;
        this.shouldValidate = false;
    };

    @action clear = () => {
        this._value = "";
        this.shouldValidate = false;
    };

    @action change = (value: string) => (this._value = value);

    @action onChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
        this._fieldHeight = event.currentTarget.scrollHeight;
        this._value = event.currentTarget.value;
    };

    @action onFocus = () => (this.isFocused = true);

    @action onBlur = () => {
        this.isFocused = false;
        this.shouldValidate = true;
    };

    @action onKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (this.onSubmit && event.keyCode === KeyCode.ENTER && event.shiftKey) {
            event.preventDefault();
            event.stopPropagation();
            this.onSubmit();
        }
    };
}
