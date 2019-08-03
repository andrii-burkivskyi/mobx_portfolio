import React, {Component} from "react";
import { observer } from "mobx-react";
import { toJS } from "mobx";
import { IMaskInput } from "react-imask";

import Icon from "components/Icon/Icon";

import bem from "utils/bem";
import { isString } from "utils/typeGuards";

import arrow from "assets/icons/arrow.svg";

import InputStore from "./Input.store";
import { ComponentProps, InputTheme } from "./Input.types";
import styles from "./form_input.scss";

@observer
export default class Input extends Component<ComponentProps> {
    static defaultProps = {
        theme: InputTheme.CV_MAIL
    }

    getClassName = (className: string) => bem(className, {
        theme: this.props.theme,
        isReadOnly: this.props.model.isReadOnly,
        isDisabled: this.props.model.isDisabled,
        isError: this.props.model.shouldDisplayError,
        isFocused: this.props.model.isFocused,
        isNumber: this.props.model.type === InputStore.type.NUMBER
    });

    render() {
        if (!this.props.model.shouldDisplayed) { return null; }
        console.log(Icon);

        return (
            <div className={this.getClassName(styles.container)}>
                {this.renderLabel()}
                {this.renderField()}
                {this.renderError()}
            </div>
        );

    };

    renderLabel = () => this.props.model.label && (
        <label className={this.getClassName(styles.label)}>
            {isString(this.props.model.label) ? this.props.model.label: this.props.model.label.get()}
        </label>
    );

    renderField = () => (
        <div className={this.getClassName(styles.field_container)}>
            <IMaskInput
                className={this.getClassName(styles.field)}
                value={this.props.model.publicValue}
                type={this.props.model.publicType}
                mask={toJS(this.props.model.mask)}
                placeholder={this.props.model.placeholder}
                onKeyDown={this.props.model.onKeyDown}
                onChange={this.props.model.onChange}
                commit={this.props.model.commit}
                onAccept={this.props.model.onAccept}
                onFocus={this.props.model.focus}
                onBlur={this.props.model.blur}
                min={this.props.model.min}
                max={this.props.model.max}
                scale={this.props.model.scale}
                signed={this.props.model.signed}
                readOnly={this.props.model.isReadOnly || this.props.model.isDisabled}
                thousandsSeparator={this.props.model.thousandsSeparator}
                radix={this.props.model.radix}
                tabIndex={this.props.model.tabIndex}
            />
            {this.renderArrows()}
        </div>
    );

    renderArrows = () => this.props.model.type === InputStore.type.NUMBER && (
        <div className={this.getClassName(styles.number_arrows)}>
            <button
                aria-disabled
                className={this.getClassName(styles.number_arrow)}
                onClick={this.props.model.increment}
                tabIndex={-1}
            >
                <Icon className={this.getClassName(styles.number_arrow_icon_up)} svg={arrow} />
            </button>

            <button
                aria-disabled
                className={this.getClassName(styles.number_arrow)}
                onClick={this.props.model.decrement}
                tabIndex={-1}
            >
                <Icon className={this.getClassName(styles.number_arrow_icon_down)} svg={arrow} />
            </button>
        </div>
    );

    renderError = () => this.props.model.shouldDisplayError && (
        <span className={this.getClassName(styles.error)}>
            {this.props.model.error}
        </span>
    );
}

export { InputTheme } from "./Input.types";