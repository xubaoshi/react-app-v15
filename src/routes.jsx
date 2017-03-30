import React from 'react'
import {Route, IndexRoute } from 'react-router'

import App from './components/App.jsx'
import Test from './components/Test.jsx'

export default (
    <Route name="app" path="/" component={App}>
        <IndexRoute component={App}></IndexRoute>
        <Route path="/test" component={Test}></Route>
    </Route>
) 