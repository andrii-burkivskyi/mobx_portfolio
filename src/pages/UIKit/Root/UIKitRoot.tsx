import { hot } from 'react-hot-loader';
import React, { Component } from "react";
import { observer } from "mobx-react";
import { Switch, Route } from "react-router";
import routes from "../../routes";
import UIKitSidebar from "./containers/Sidebar/UIKitSidebar";
import UIKitHeader from "./containers/Header/UIKitHeader";

import styles from "./ui_kit_root.scss";

@observer
class UIKitRootView extends Component {
    render() {
        return (
            <div className={styles.container}>
                <UIKitHeader />
                <div className={styles.body}>
                    <UIKitSidebar />
                    <div className={styles.content}>
                        <Switch>
                            <Route {...routes.UIKitForm} />
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

export default hot(module)(UIKitRootView);
