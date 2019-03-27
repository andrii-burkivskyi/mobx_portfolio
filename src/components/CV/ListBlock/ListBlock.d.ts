export interface ComponentProps {
    icon: string,
    title: string,
    color?: ListBlockColor,    
    children: any,
}

export enum ListBlockColor {
    BLACK = "black",
    WHITE = "white"
}
