import InputStore from "./Input.store";

export enum InputTheme {
    CV_MAIL = "cv_mail",
    UI_KIT_DEFAULT = "ui_kit_default"
}

export interface ComponentProps {
    theme: InputTheme;
    model: InputStore;
}
