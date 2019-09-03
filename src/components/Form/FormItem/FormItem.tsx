
import React, {Component} from "react";
import { observer } from "mobx-react";

import { FormItemProps } from "components/Form/Form.types";

import bem from "utils/bem";
import { isString } from "utils/typeGuards";

import styles from "./form_item.scss";

@observer
export default class FormItem extends Component<ViewOf<FormItemProps> & HasClassName> {
    getClassName = (className: string, addedClassName?: string) => bem(className, {
        theme: this.props.model.theme,
        isReadOnly: this.props.model.isReadOnly,
        isDisabled: this.props.model.isDisabled,
        isError: this.props.model.shouldDisplayError,
        isFocused: this.props.model.isFocused,
    }, addedClassName);

    render() {
        if (!this.props.model.shouldDisplayed) { return null; }

        return (
            <div className={this.getClassName(styles.container, this.props.className)}>
                {this.renderLabel()}
                <div className={this.getClassName(styles.item_container)}>
                    {this.props.children}
                    {this.renderError()}
                </div>
            </div>
        );

    };

    renderLabel = () => this.props.model.label && (
        <label className={this.getClassName(styles.label)}>
            {isString(this.props.model.label) ? this.props.model.label: this.props.model.label.get()}
        </label>
    );


    renderError = () => this.props.model.shouldDisplayError && (
        <span className={this.getClassName(styles.error)}>
            {this.props.model.error}
        </span>
    );
}
