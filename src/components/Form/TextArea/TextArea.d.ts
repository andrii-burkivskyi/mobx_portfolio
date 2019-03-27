import TextAreaStore from "./TextArea.store";

export enum TextAreaTheme {
    CV_MAIL = "cv_mail",
    UI_KIT_DEFAULT = "ui_kit_default"
}

export interface ComponentProps {
    theme: TextAreaTheme;
    model: TextAreaStore;
}
