import React from 'react'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'

import Routes from '../routes.jsx'

export default class Container extends React.Component {
    render() {
        const { store } = this.props
        const history = syncHistoryWithStore(browserHistory, store);
        return (
            <Provider store={store}>
                <Router children={Routes} history={history}></Router>
            </Provider>
        )
    }
}