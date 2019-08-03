import React, { Component } from "react";
import { observer } from "mobx-react";
import Widget from "../../../../../components/Widget/Widget";
import Input, { InputTheme } from "../../../../../components/Form/Input/Input";
import { InputSectionStore } from "../InputSection/InputSection.store";
import { t } from "../../../../../utils/translations";

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
                    <div className={styles.col}>
                        <Input
                            theme={InputTheme.UI_KIT_DEFAULT}
                            model={this.props.model.standardInput}
                        />
                    </div>
                    <div className={styles.col}>
                        <Input
                            theme={InputTheme.UI_KIT_DEFAULT}
                            model={this.props.model.validatedInput}
                        />
                    </div>
                    <div className={styles.col}>
                        <Input
                            theme={InputTheme.UI_KIT_DEFAULT}
                            model={this.props.model.maskedInput}
                        />
                    </div>
                    <div className={styles.col}>
                        <Input
                            theme={InputTheme.UI_KIT_DEFAULT}
                            model={this.props.model.numberInput}
                        />
                    </div>
                    <div className={styles.col}>
                        <Input
                            theme={InputTheme.UI_KIT_DEFAULT}
                            model={this.props.model.readOnlyInput}
                        />
                    </div>
                    <div className={styles.col}>
                        <Input
                            theme={InputTheme.UI_KIT_DEFAULT}
                            model={this.props.model.disabledInput}
                        />
                    </div>
                </div>
            </section>
        );
    }
}
