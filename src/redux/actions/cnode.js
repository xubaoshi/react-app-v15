import * as constant from '../constant/cnode'

export function listCnodeSuccess(data) {
    return { type: constant.LIST_CNODE_REQUEST_SUCCESS, data }
}
export function listCnodeFialure() {
    return { type: constant.LIST_CNODE_REQUEST_FAILURE }
}
export function listCnode() {
    return { type: constant.LIST_CNODE_REQUEST_BEGIN }
}
export function getCnodeList(par) {
    return dispatch => {
        dispatch(listCnode())
        const url = ' https://cnodejs.org/api/v1/topics?tab=' + par.tab
        var param = Object.assign({}, par, { limit: 20 })
        fetch(url, {method: "GET",tab:par.tab,limit: 20 }).then(function (response) {
            return response.json()
        }).then(function (json) {
            console.log('parsed json', json)
            dispatch(listCnodeSuccess(json))
        }).catch(function (ex) {
            console.log(ex)
            dispatch(listCnodeFialure())
        })
    }
}