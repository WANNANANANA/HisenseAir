/* 参数说明
 * type【String】 请求方式（'POST'或'GET'） 默认设置'GET'方式
 * dataType【String】 获取到的后台数据格式 默认'JSON'格式
 * async【String】 是否异步执行 默认true异步执行
 * ajaxData【Object】 请求参数 
 * url【String】 发送请求的url
 * success【Function】 成功回调函数
 * fail【Function】 失败回调函数
 */

export function ajax({ type, dataType, async, ajaxData, url, success, fail }) {
    type = (type || "GET").toUpperCase();
    dataType = dataType || 'json';
    async = async || true;
    var getParams = function(data) {
        var arr = [];
        for (var param in data) {
            arr.push(encodeURIComponent(param) + '=' + encodeURIComponent(data[param]));
        }
        return arr.join('&');
    }
    var xhr,
        params = getParams(ajaxData);

    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP')
    }
    xhr.onreadystatechange = function() {
        if (dataType === 'json') {
            if (xhr.readyState == 4) {
                var status = xhr.status;
                if (status >= 200 && status < 300) {
                    success && success(xhr.responseText, xhr.responseXML); // 判断success回调函数的存在并执行函数
                } else {
                    fail && fail(status); // 判断fail回调函数的存在并执行函数
                }
            }
        } else {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                var oScript = document.createElement('script');
                document.body.appendChild(oScript);

                var callbackname = 'monoplasty'
                oScript.src = opt.url + "?" + params + '&callback=' + callbackname;

                window['monoplasty'] = function(data) {
                    success(data);
                    document.body.removeChild(oScript);
                };
            }
        }
    };
    if (type == 'GET') {
        xhr.open("GET", url + '?' + params, async);
        xhr.send(null);
    } else if (type == 'POST') {
        xhr.open('POST', url, async);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(params);
    }
}