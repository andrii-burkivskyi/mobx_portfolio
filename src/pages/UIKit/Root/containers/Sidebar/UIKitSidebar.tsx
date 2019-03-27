import React, {Component} from "react";

import styles from "./ui_kit_sidebar.scss";
import UIKitSidebarItem from "./SidebarItem/UIKitSidebarItem";
import routes from "../../../../routes";

export default class UIKitSidebar extends Component {
    render() {
        return (
            <div className={styles.container}>
                <UIKitSidebarItem
                    to={routes.UIKitForm.path}
                    text="UI Kit | Forms examples"
                    glyph="#form"
                />
            </div>
        );
    }
}