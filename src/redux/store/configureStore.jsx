import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux-immutable'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import routerReducer from '../reducers/routeReducer'
import rootReducer from '../reducers/index'
import immutable from 'immutable';

const combinedReducers = combineReducers({
    rootReducer,
    routing: routerReducer
})

export default function configureStore() {
    const store = createStore(
        combinedReducers,
        applyMiddleware(thunkMiddleware, createLogger)
    )

    return store
}


