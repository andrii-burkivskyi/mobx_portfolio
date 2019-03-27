import React, {Component} from "react";
import { LocationDescriptor } from "history";

import styles from "./ui_kit_sidebar_item.scss"
import { NavLink } from "react-router-dom";
import Icon from "../../../../../../components/Icon/Icon";
import Tooltip from "../../../../../../components/Tooltip/Tooltip";

interface ComponentProps {
    to: LocationDescriptor,
    glyph: string,
    text: string,
    exact?: boolean
}

export default class UIKitSidebarItem extends Component<ComponentProps> {
    render() {
        return (
            <Tooltip id={`${this.props.to}${this.props.glyph}`} text={this.props.text} >
                <NavLink
                    className={styles.container}
                    to={this.props.to}
                    exact={this.props.exact}
                >
                    <Icon className={styles.icon} glyph={this.props.glyph} />
                </NavLink>

            </Tooltip>
        );
    }
}