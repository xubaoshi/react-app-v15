import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { routerReducer } from 'react-router-redux'
import rootReducer from '../reducers/index'

const combinedReducers = combineReducers({
    rootReducer,
    routing: routerReducer
})

export default function configureStore(initialState) {
    const store = createStore(
        combinedReducers,
        initialState,
        applyMiddleware(thunkMiddleware, createLogger)
    )

    return store
}


