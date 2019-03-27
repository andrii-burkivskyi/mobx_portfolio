import React, {Component} from "react";

import { Link } from "react-router-dom";
import routes from "../../../../routes";
import Icon from "../../../../../components/Icon/Icon";

import styles from "./ui_kit_header.scss";

export default class UIKitHeader extends Component {
    render() {
        return (
            <div className={styles.container}>
                <Link className={styles.logo} to={routes.UIKitRoot.path}>
                    <Icon className={styles.logo_icon} glyph="#logo" />
                </Link>
            </div>
        );
    }
}
