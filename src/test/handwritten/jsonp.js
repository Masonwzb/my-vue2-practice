function myJsonp(url, data, callback) {
    // 拼接data参数到url
    let dataString = url.indexOf('?') === -1 ? '?' : '&';
    for (let key in data) {
        dataString += `${key}=${data[key]}&`;
    }

    // 添加callback函数
    let jsonpFuncName = 'my_jsonp_cb' + Math.random().toString().replace('.', '');
    // script标签src
    let finalUrl = `${url}${dataString}callback=${jsonpFuncName}`;

    // 创建script标签
    let theScript = document.createElement('script');
    theScript.src = finalUrl;

    // 创建函数接受服务器返回的参数数据
    window[jsonpFuncName] = function (data) {
        callback(data);

        document.body.removeChild(theScript);
    }

    document.body.appendChild(theScript);
}