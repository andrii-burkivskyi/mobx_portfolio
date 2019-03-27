import React, {Component} from "react";
import Scrollbars from "react-custom-scrollbars";

import styles from "./b-scrollbar.scss"

interface ComponentProps {
}

export default class Scrollbar extends Component<ComponentProps> {
    render() {
        const { children } = this.props;
        return (
            <div className={styles.container}>
                <Scrollbars>
                    {children}
                </Scrollbars>
            </div>
        );
    }
}