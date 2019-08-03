import React, { Component } from "react";
import { observer } from "mobx-react";
import Widget from "../../../../../components/Widget/Widget";
import TextArea, { TextAreaTheme } from "../../../../../components/Form/TextArea/TextArea";
import { t } from "../../../../../utils/translations";

import { TextAreaSectionStore } from "./TextAreaSection.store";
import styles from "./ui_kit_forms_textarea_section.scss";

interface ComponentProps {
    model: TextAreaSectionStore
}

@observer
export default class TextAreaSection extends Component<ComponentProps> {
    render() {
        const { model } = this.props;
        return (
            <section>
                <Widget.Header>
                    <Widget.Title>2. Textareas</Widget.Title>
                </Widget.Header>
                <div className={styles.grid}>
                    <div className={styles.col}>
                        <TextArea
                            theme={TextAreaTheme.UI_KIT_DEFAULT}
                            model={model.simpleTextArea}
                        />
                    </div>
                    <div className={styles.col}>
                        <TextArea
                            theme={TextAreaTheme.UI_KIT_DEFAULT}
                            model={model.validateTextArea}
                        />
                    </div>
                    <div className={styles.col}>
                        <TextArea
                            theme={TextAreaTheme.UI_KIT_DEFAULT}
                            model={model.readonlyTextArea}
                        />
                    </div>
                    <div className={styles.col}>
                        <TextArea
                            theme={TextAreaTheme.UI_KIT_DEFAULT}
                            model={model.disabledTextArea}
                        />
                    </div>
                </div>
            </section>
        );
    }
}
