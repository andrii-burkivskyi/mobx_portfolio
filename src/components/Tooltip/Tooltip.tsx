import React, {Component} from "react";
import ReactTooltip  from "react-tooltip";
import renderChildren from "../../utils/renderChildren";

import { ComponentProps, TooltipPlace } from "./Tooltip.d";
import styles from "./tooltip.scss"

export { TooltipPlace } from "./Tooltip.d"

export default class Tooltip extends Component<ComponentProps> {
    static defaultProps = {
        place: TooltipPlace.BOTTOM
    }

    render() {
        const { id, text, place, children } = this.props;
        return (
            <React.Fragment>
                {renderChildren(children, { ["data-tip"]: "", ["data-for"]: id })}
                <ReactTooltip id={id} place={place} type="light" effect="solid">
                    <span className={styles.text}>{text}</span>
                </ReactTooltip>
            </React.Fragment>
        );
    }
}