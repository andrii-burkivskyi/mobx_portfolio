import TextAreaStore from "./TextArea/TextArea.store";
import InputStore from "./Input/Input.store";
import FormStore from "./Form.store";
import { IObservableValue } from "mobx";

export interface FormIntegrationProps {
    formValue: TextAreaStore["formValue"] | InputStore["formValue"];
    shouldValidate: boolean;
    isTouched: boolean;
    isError: boolean;
    clear: () => void;
    reset: () => void;
    onSubmit?: () => void;
}

export interface FormItemProps {
    theme: FormTheme;
    label?: string | IObservableValue<string>;
    error?: string | IObservableValue<string>;
    shouldDisplayed: boolean;
    isReadOnly: boolean;
    isDisabled: boolean;
    shouldDisplayError: boolean;
    isFocused: boolean;
}

export interface InitProps<T> {
    fields: FormStore<T>["fields"];
    touchHook?: FormStore<T>["_touchHook"];
    onSubmit?: () => void;
}

export enum TabIndex {
    Disabled = -1,
    NotImportant = 1,
    Regular = 10,
    Important = 100,
    VeryImportant = 1000
}

export enum FormTheme {
    CV_MAIL = "cv_mail",
    UI_KIT_DEFAULT = "ui_kit_default"
}
