export enum ChartListColor {
    WHITE = "white",
    BLACK = "black"
}

export enum ChartListSize {
    SMALL = "small",
    LARGE = "large"
}

export interface ComponentProps {
    items: Array<{ value: string, text: string }>
    color?: ChartListColor,
    size?: ChartListSize
}
