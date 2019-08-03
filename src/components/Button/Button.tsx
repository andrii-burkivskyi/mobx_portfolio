import React, {Component} from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import bem from "../../utils/bem";

import Icon from "../Icon/Icon";
import { blurAll } from "../../utils/dom";
import ButtonStore from "./Button.store";

import styles from "./button.scss"

import { ComponentProps } from "./Button.types";

export { ButtonTheme, ButtonColor, ButtonSize, ButtonIconPosition } from "./Button.types";

@observer
export default class Button extends Component<ComponentProps> {
    static defaultProps = {
        model: new ButtonStore()
    }
    onClick = () => {
        const { onClick } = this.props;
        blurAll();
        onClick && onClick();
    }

    getClassName = (coreClassName: string, addedClassName: string = "") => bem(coreClassName,
        {
            theme: this.props.theme,
            color: this.props.color,
            size: this.props.size,
            isDisabled: this.props.model.isDisabled,
            iconPosition: this.props.glyph && this.props.iconPosition,
            hasNoAction: !Boolean(this.props.onClick) &&
                !Boolean(this.props.href) &&
                !Boolean(this.props.to)
        },
        addedClassName
    );

    render() {
        const { to, href, onClick, className, padding, model } = this.props;
        if (!model.isDisplayed) { return null; }

        const buttonElement = to && Link || href && "a" || onClick && "button" || "span";
        return (
            <div className={this.getClassName(styles.button_container, className)} style={{ padding }}>
                {
                    React.createElement(
                        buttonElement,
                        this.renderButtonProps(this.props),
                        this.renderText(this.props),
                        this.renderIcon(this.props)
                    )
                }
            </div>
        );
    }

    renderButtonProps = ({ to, href, onClick, target }: ComponentProps) => 
        ({ className: this.getClassName(styles.button), to, href, onClick, target }) as any;

    renderText = (props: ComponentProps) => props.text && (
        <div aria-disabled className={this.getClassName(styles.text_container)}>
            <span aria-disabled className={this.getClassName(styles.text)}>{props.text}</span>
            {
                props.counter !== undefined && props.counter > 1 &&
                <span className={this.getClassName(styles.counter)}>
                    {props.counter}
                </span>
            }
        </div>
    );
    
    renderIcon = (props: ComponentProps) => props.glyph && (
        <Icon
            className={this.getClassName(styles.icon)}
            svg={props.glyph}
        />
    );

}