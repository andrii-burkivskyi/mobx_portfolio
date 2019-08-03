import { LocationDescriptor } from "history";
import { IObservableValue } from "mobx";
import ButtonStore from "./Button.store";

export enum ButtonTheme {
    TOP_BAR = "top_bar",
    CV_LINK = "cv_link",
    ONLY_ICON = "only_icon",
    POPUP = "popup"
}

export enum ButtonSize {
    SMALL = "small",
    NORMAL = "normal"
}

export enum ButtonColor {
    WHITE = "white"
}

export enum ButtonIconPosition {
    LEFT = "left",
    RIGHT = "right"
}

export interface ComponentProps {
    className?: string;
    text?: string;
    counter?: number;
    glyph?: string;
    target?: "_blank";
    padding?: string;

    iconWidth?: string | number;
    iconHeight?: string | number;

    theme?: ButtonTheme;
    size?: ButtonSize;
    color?: ButtonColor;
    iconPosition?: ButtonIconPosition;

    model: ButtonStore;

    to?: LocationDescriptor
    href?: string
    onClick?: (event?: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
}