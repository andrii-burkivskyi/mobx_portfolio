import React, { Component } from "react";
import { observer } from "mobx-react";

import Widget from "components/Widget/Widget";
import Input from "components/Form/Input/Input";

import { t } from "utils/translations";

import { InputSectionStore } from "./InputSection.store";

import styles from "./ui_kit_forms_input_section.scss";

interface ComponentProps {
    model: InputSectionStore;
}

@observer
export default class InputSection extends Component<ComponentProps> {
    render() {
        const { model } = this.props;
        return (
            <section>
                <Widget.Header>
                    <Widget.Title>1. Inputs</Widget.Title>
                </Widget.Header>
                <div className={styles.grid}>
                    <Input className={styles.col} model={this.props.model.standardInput} />
                    <Input className={styles.col} model={this.props.model.validatedInput} />
                    <Input className={styles.col} model={this.props.model.maskedInput} />
                    <Input className={styles.col} model={this.props.model.numberInput} />
                    <Input className={styles.col} model={this.props.model.readOnlyInput} />
                    <Input className={styles.col} model={this.props.model.disabledInput} />
                </div>
            </section>
        );
    }
}
