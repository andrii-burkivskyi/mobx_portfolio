import './assets/global.scss';

import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'mobx-react';
import { syncHistoryWithStore } from 'mobx-react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';

import Root from "./pages/Root/Root";

import state from './core/State.store';

const browserHistory = createBrowserHistory();

const history = syncHistoryWithStore(browserHistory, state.router);

ReactDOM.render(
    <Provider state={state} routing={state.router}>
        <Router history={history}>
            <Root />
        </Router>
    </Provider>,
    document.getElementById('root')
);
