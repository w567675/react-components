import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';

const Root = ({ store }) => (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/src/testdemo/react/todos/(:filter)" component={App} />
        </Router>
    </Provider>
);

Root.PropTypes = {
    store: PropTypes.object.isRequired,
}

export default Root;