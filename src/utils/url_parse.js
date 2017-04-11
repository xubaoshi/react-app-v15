export const getUrl = (url, params) => {
    var str = url;
    if (typeof params === 'object' && params) {
        str += '?'
        Object.keys(params).forEach(function (val) {
            str += val + '=' + params[val] + '&'
        })
    }
    return str;
} 