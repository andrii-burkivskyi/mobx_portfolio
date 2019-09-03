import React, { Component } from "react";
import { observer } from "mobx-react";
import Widget from "components/Widget/Widget";
import TextArea from "components/Form/TextArea/TextArea";
import { t } from "utils/translations";

import { TextAreaSectionStore } from "./TextAreaSection.store";
import styles from "./ui_kit_forms_textarea_section.scss";

@observer
export default class TextAreaSection extends Component<ViewOf<TextAreaSectionStore>> {
    render() {
        const { model } = this.props;
        return (
            <section>
                <Widget.Header>
                    <Widget.Title>2. Textareas</Widget.Title>
                </Widget.Header>
                <div className={styles.grid}>
                    <div className={styles.col}>
                        <TextArea model={model.simpleTextArea} />
                    </div>
                    <div className={styles.col}>
                        <TextArea model={model.validateTextArea} />
                    </div>
                    <div className={styles.col}>
                        <TextArea model={model.readonlyTextArea} />
                    </div>
                    <div className={styles.col}>
                        <TextArea model={model.disabledTextArea} />
                    </div>
                </div>
            </section>
        );
    }
}
