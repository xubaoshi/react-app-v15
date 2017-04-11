import { combineReducers } from 'redux'
import { fromJS, List } from 'immutable'
import * as constant from '../constant/cnode'

const list = (
    state = fromJS({ isFetching: false, topics: [] }),
    action
) => {
    switch (action.type) {
        case constant.LIST_CNODE_REQUEST_BEGIN:
            return state.set('isFetching', true)
        case constant.LIST_CNODE_REQUEST_SUCCESS:
            return state.set('isFetching', false)
                .set('topics', state.get('topics').concat(action.data.data))

        case constant.LIST_CNODE_REQUEST_FAILURE:
            return state.set('isFetching', false)
        case constant.LIST_CNODE_RESOURCE_INIT:
            return state.set('topics',List([]))
        default:
            return state

    }
}

const cnodeReducer = combineReducers({
    list
})

export default cnodeReducer