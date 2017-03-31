import React from 'react'
import {Route, IndexRoute } from 'react-router'

import App from './components/App.jsx'
import Test from './components/Test.jsx'
import TopicListContainer from './components/cnode/TopicListContainer'

export default (
    <Route name="app" path="/" component={App}>
        <IndexRoute component={App}></IndexRoute>
        <Route path="/test" component={Test}></Route>
        <Route path="/topic/list" component={TopicListContainer}></Route>
    </Route>
) 