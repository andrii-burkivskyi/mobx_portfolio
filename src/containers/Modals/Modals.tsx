import React, {Component} from "react";
import { observer } from "mobx-react";

import ContactMe from "./ContactMe/ContactMe";

@observer
export default class Modals extends Component {
    render() {
        return (
            <React.Fragment>
                <ContactMe />
            </React.Fragment>
        );
    }
}