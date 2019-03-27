export const isSyntheticEvent = <T extends CommonMap, H = HTMLElement>(event: React.MouseEvent<H> | T): event is React.MouseEvent<H> =>
    typeof event !== "string" &&
    Boolean(event) &&
    Boolean(event.nativeEvent) &&
    event.nativeEvent instanceof Event;