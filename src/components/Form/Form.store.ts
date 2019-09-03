import { observable, action, computed, observe, IValueDidChange } from "mobx";
import TextAreaStore from "./TextArea/TextArea.store";
import InputStore from "./Input/Input.store";
import { DEFAULT_FUNCTION } from "../../utils/constants";
import { InitProps, FormIntegrationProps, FormItemProps } from "./Form.types";


export default class FormStore<T> {
    constructor(props: InitProps<T>) {
        this.fields = props.fields;
        this._fields.forEach((field) => field.onSubmit = (field.onSubmit || props.onSubmit));
        this.submit = props.onSubmit || DEFAULT_FUNCTION;
        this._touchHook = props.touchHook;
        this._touchHook && observe(this, "isTouched", this._touchHook);
    }

    @observable fields: { [P in keyof T]: T[P] };
    @observable private _touchHook?: (change: IValueDidChange<boolean>) => void;
    @observable submit: () => void;

    @computed get data(): { [P in keyof T]: FormIntegrationProps["formValue"] } {
        return <{ [P in keyof T]: any }>Object.entries(this.fields).reduce((data, [key, field]) => {
            data[key] = (<FormIntegrationProps>field).formValue;
            return data;
        }, {})
    };

    @computed private get _fields(): Array<FormIntegrationProps> {
        return Object.keys(this.fields).map((key) => <FormIntegrationProps>this.fields[key])
    }

    @computed get isTouched(): boolean  {
        return this._fields.some((field) => field.isTouched);
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