import React, { Component } from "react";
import Scrollbars from "react-custom-scrollbars";
import { toJS } from "mobx";
import { observer } from "mobx-react";
import bem from "../../../utils/bem";

import { ComponentProps, TextAreaTheme } from "./TextArea.d";

import styles from "./form_textarea.scss";

export { TextAreaTheme } from "./TextArea.d";

@observer
export default class TextArea extends Component<ComponentProps> {
    static defaultProps = {
        theme: TextAreaTheme.CV_MAIL
    };

    componentDidMount() {
        setTimeout(this.props.model.init, 0);
    }

    getClassName = (className: string) =>
        bem(className, {
            theme: this.props.theme,
            isReadOnly: this.props.model.isReadOnly.get(),
            isDisabled: this.props.model.isDisabled.get(),
            isError: this.props.model.shouldDisplayError,
            isFocused: this.props.model.isFocused
        });

    render() {
        const { model } = this.props;
        if (!model.shouldDisplayed.get()) {
            return null;
        }
        return (
            <div className={this.getClassName(styles.container)}>
                {this.renderLabel()}
                {this.renderField()}
                {this.renderError()}
            </div>
        );
    }

    renderLabel = () =>
        this.props.model.label && (
            <label className={this.getClassName(styles.label)}>
                {this.props.model.label}
            </label>
        );

    renderField = () => (
        <div
            ref={this.props.model.fieldContainerRef}
            className={this.getClassName(styles.field_container)}
        >
            <Scrollbars style={toJS(this.props.model.scrollbarStyle)}>
                <textarea
                    ref={this.props.model.fieldRef}
                    tabIndex={this.props.model.tabIndex}
                    className={this.getClassName(styles.field)}
                    style={toJS(this.props.model.fieldStyle)}
                    value={this.props.model.value}
                    readOnly={this.props.model.isReadOnly.get() || this.props.model.isDisabled.get()}
                    placeholder={this.props.model.placeholder}
                    onChange={this.props.model.onChange}
                    onFocus={this.props.model.onFocus}
                    onBlur={this.props.model.onBlur}
                    onKeyDown={this.props.model.onKeyDown}
                />
            </Scrollbars>
        </div>
    );

    renderError = () =>
        this.props.model.shouldDisplayError && (
            <span className={this.getClassName(styles.error)}>
                {this.props.model.error}
            </span>
        );
}
