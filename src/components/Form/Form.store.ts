import { observable, action, computed, IObservableValue, observe } from "mobx";
import TextAreaStore from "./TextArea/TextArea.store";
import InputStore from "./Input/Input.store";
import { DEFAULT_FUNCTION } from "../../utils/constants";

export interface FormFieldProps {
    formValue: TextAreaStore["formValue"] | InputStore["formValue"];
    shouldValidate: boolean;
    isTouched: boolean;
    isError: boolean;
    clear: () => void;
    reset: () => void;
    onSubmit?: () => void;
}

interface InitProps<T> {
    fields: FormStore<T>["fields"];
    onSubmit?: () => void;
}

export default class FormStore<T> {
    constructor(props: InitProps<T>) {
        this.fields = props.fields;
        this._fields.forEach((field) => field.onSubmit = (field.onSubmit || props.onSubmit));
        this.submit = props.onSubmit || DEFAULT_FUNCTION;
        this.isDisabledObservable.set(this.isDisabled);
        this.isValidObservable.set(this.isValid);
        observe(this, "isDisabled", (change) => this.isDisabledObservable.set(change.newValue));
        observe(this, "isValid", (change) => this.isValidObservable.set(change.newValue));
    }

    @observable fields: { [P in keyof T]: T[P] };
    @observable isDisabledObservable: IObservableValue<boolean> = observable.box(false);
    @observable isValidObservable: IObservableValue<boolean> = observable.box(false);
    @observable submit: () => void;

    @computed get data(): { [P in keyof T]: FormFieldProps["formValue"] } {
        return <{ [P in keyof T]: any }>Object.entries(this.fields).reduce((data, [key, field]) => {
            data[key] = (<FormFieldProps>field).formValue;
            return data;
        }, {})
    };

    @computed private get _fields(): Array<FormFieldProps> {
        return Object.keys(this.fields).map((key) => <FormFieldProps>this.fields[key])
    }

    @computed get isDisabled(): boolean  {
        return !this._fields.some((field) => field.isTouched);
    }

    @computed get isValid(): boolean  {
        return !this._fields.some((field) => field.isError);
    }


    @action clear = () => {
        this._fields.forEach((field) => field.clear())
    }

    @action reset = () => {
        this._fields.forEach((field) => field.reset())
    }

    @action allowValidation = () => {
        this._fields.forEach((field) => field.shouldValidate = true)
    }

    @action init = (fields: FormStore<T>["fields"]) => {
        this.fields = fields;
    }
}