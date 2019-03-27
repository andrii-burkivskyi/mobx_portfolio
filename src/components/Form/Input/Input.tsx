import React, {Component} from "react";
import { observer } from "mobx-react";
import { IMaskInput } from "react-imask";
import bem from "../../../utils/bem";

import { ComponentProps, InputTheme } from "./Input.d";

import styles from "./form_input.scss";
import { toJS } from "mobx";
import Icon from "../../Icon/Icon";
import InputStore from "./Input.store";

export { InputTheme } from "./Input.d";

@observer
export default class Input extends Component<ComponentProps> {
    static defaultProps = {
        theme: InputTheme.CV_MAIL
    }

    getClassName = (className: string) => bem(className, {
        theme: this.props.theme,
        isReadOnly: this.props.model.isReadOnly.get(),
        isDisabled: this.props.model.isDisabled.get(),
        isError: this.props.model.shouldDisplayError,
        isFocused: this.props.model.isFocused,
        isNumber: this.props.model.type === InputStore.type.NUMBER
    });

    render() {
        if (!this.props.model.shouldDisplayed.get()) { return null; }

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
            {this.props.model.label}
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
                onFocus={this.props.model.onFocus}
                onBlur={this.props.model.onBlur}
                min={this.props.model.min}
                max={this.props.model.max}
                scale={this.props.model.scale}
                signed={this.props.model.signed}
                readOnly={this.props.model.isReadOnly.get() || this.props.model.isDisabled.get()}
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
                className={this.getClassName(styles.number_arrow)}
                onClick={this.props.model.increment}
                tabIndex={-1}
            >
                <Icon className={this.getClassName(styles.number_arrow_icon_up)} glyph="#arrow" />
            </button>

            <button
                className={this.getClassName(styles.number_arrow)}
                onClick={this.props.model.decrement}
                tabIndex={-1}
            >
                <Icon className={this.getClassName(styles.number_arrow_icon_down)} glyph="#arrow" />
            </button>
        </div>
    );

    renderError = () => this.props.model.shouldDisplayError && (
        <span className={this.getClassName(styles.error)}>
            {this.props.model.error}
        </span>
    );
}
