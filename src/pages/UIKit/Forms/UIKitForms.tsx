import { hot } from "react-hot-loader";
import React, { Component } from "react";
import { observer } from "mobx-react";
import DocumentTitle from "react-document-title";
import UIKitForms from "./UIKitForms.store";

import InputSection from "./containers/InputSection/InputSection";
import Scrollbar from "../../../components/Scrollbar/Scrollbar";

import TextAreaSection from "./containers/TextAreaSection/TextAreaSection";

@observer
class UIKitFormsView extends Component {
    render() {
        return (
            <DocumentTitle title={UIKitForms.title}>
                <Scrollbar>
                    <InputSection model={UIKitForms.inputSection} />
                    <TextAreaSection model={UIKitForms.textAreaSection} />
                </Scrollbar>
            </DocumentTitle>
        );
    }
}

export default hot(module)(UIKitFormsView);
