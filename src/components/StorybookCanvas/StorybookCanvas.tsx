import React, { Component } from "react";

import styles from "./storybook_canvas.scss";

interface ComponentProps {
    width?: number | string;
    height?: number | string;
    color?: string;
    padding?: string;
};

class StorybookCanvas extends Component<ComponentProps> {
    render() {
        const { children, width, height, padding, color } = this.props;
        return (
            <div className={styles.container}>
                <div className={styles.canvas} style={{ width, height, padding, backgroundColor: color }}>
                    {children}
                </div>
            </div>
        );
    }
}

export default StorybookCanvas;