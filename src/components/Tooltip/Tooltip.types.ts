
export enum TooltipPlace {
    TOP = "top",
    RIGHT = "right",
    BOTTOM = "bottom",
    LEFT = "left",
}

export interface ComponentProps {
    id: string,
    text: string | number,
    place: TooltipPlace
}
