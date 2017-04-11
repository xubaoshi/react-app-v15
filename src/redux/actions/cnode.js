import * as constant from '../constant/cnode'
import { getUrl } from '../../utils/url_parse'

export function listCnodeSuccess(data) {
    return { type: constant.LIST_CNODE_REQUEST_SUCCESS, data }
}
export function listCnodeFialure() {
    return { type: constant.LIST_CNODE_REQUEST_FAILURE }
}
export function listCnode() {
    return { type: constant.LIST_CNODE_REQUEST_BEGIN }
}
export function listCnodeInit(data) {
    return { type: constant.LIST_CNODE_RESOURCE_INIT, data }
}


export function getCnodeList(param) {
    return dispatch => {
        dispatch(listCnode())
        param = Object.assign({}, param, { limit: 15 })
        const url = ' https://cnodejs.org/api/v1/topics'
        const str = getUrl(url, param)
        fetch(str, { method: "GET" }).then(function (response) {
            return response.json()
        }).then(function (json) {
            console.log('parsed json', json)
            if (param.page == 1) {
                dispatch(listCnodeInit(json))
                dispatch(listCnodeSuccess(json))
            } else {
                dispatch(listCnodeSuccess(json))
            }
        }).catch(function (ex) {
            console.log(ex)
            dispatch(listCnodeFialure())
        })
    }
}