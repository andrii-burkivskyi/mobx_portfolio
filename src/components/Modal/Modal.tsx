import React, { Component } from "react";

import Portal from "../Portal/Portal";

import styles from "./modal.scss";

export default class Modal extends Component<ComponentProps> {
    render() {
        const { children } = this.props;
        return (
            <Portal>
                <div className={styles.container}>{children}</div>
            </Portal>
        );
    }
}

interface ComponentProps {
    onOutsideClick?: () => void
}
