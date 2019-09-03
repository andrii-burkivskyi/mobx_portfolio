import React, { Component } from "react";
import Scrollbars from "react-custom-scrollbars";
import { toJS } from "mobx";
import { observer } from "mobx-react";

import FormItem from "components/Form/FormItem/FormItem";
import bem from "utils/bem";

import TextAreaStore from "./TextArea.store";

import styles from "./form_textarea.scss";


@observer
export default class TextArea extends Component<ViewOf<TextAreaStore> & HasClassName> {
    componentDidMount() {
        setTimeout(this.props.model.init, 0);
    }

    getClassName = (className: string) =>
        bem(className, {
            theme: this.props.model.theme,
            isReadOnly: this.props.model.isReadOnly,
            isDisabled: this.props.model.isDisabled,
            isError: this.props.model.shouldDisplayError,
            isFocused: this.props.model.isFocused
        });

    render() {
        const { className, model } = this.props;
        return (
            <FormItem className={className} model={model}>
                {this.renderField()}
            </FormItem>
        );
    }


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
                    readOnly={this.props.model.isReadOnly || this.props.model.isDisabled}
                    placeholder={this.props.model.placeholder}
                    onChange={this.props.model.onChange}
                    onFocus={this.props.model.onFocus}
                    onBlur={this.props.model.onBlur}
                    onKeyDown={this.props.model.onKeyDown}
                />
            </Scrollbars>
        </div>
    );

}
