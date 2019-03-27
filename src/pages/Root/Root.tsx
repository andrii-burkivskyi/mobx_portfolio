import React, {Component} from "react";
import { observer } from "mobx-react";
import { Route, Switch } from 'react-router';

import Modals from '../../containers/Modals/Modals';
import TopBar from '../../containers/TopBar/TopBar';
import routes from '../../pages/routes';

import styles from "./root.scss"

export default class Root extends Component {
    render() {
        return (
            <div className={styles.container} >
                <TopBar />
                <div className={styles.content}>
                    <Switch>
                        <Route {...routes.CV} />
                        <Route {...routes.UIKitRoot} />
                    </Switch>
                </div>
                <Modals />
            </div>
        );
    }
}