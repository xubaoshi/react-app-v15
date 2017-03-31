import { combineReducers } from 'redux'
import * as constant from '../constant/cnode'

const list = (
    state = { isFetching: false, topics: [] },
    action
) => {
    switch (action.type) {
        case constant.LIST_CNODE_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                topics: action.data,
                isFetching: false
            })
        case constant.LIST_CNODE_REQUEST_FAILURE:
            return Object.assign({}, state, {
                isFetching: false
            })
        case constant.LIST_CNODE_REQUEST_BEGIN:
            return Object.assign({}, state, {
                isFetching: true
            })
        default:
            return state

    }
}

const cnodeReducer = combineReducers({
    list
})

export default cnodeReducer