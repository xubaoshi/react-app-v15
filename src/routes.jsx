import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App.jsx'
import TopicListContainer from './components/cnode/TopicListContainer'

export default (
    <Route name="app" path="/" component={App}>
        {/*<IndexRoute component={TopicListContainer}>

        </IndexRoute>*/}
        <Route path="/topics/:tab" component={TopicListContainer}></Route>
    </Route>
) 