/**
 * AJAX 请求封装
 */
interface ajaxOption {
  method: string;
  url: string;
  data: any;
  params: any;
  success: any;
  error: any;
}

export const ajax = (option: ajaxOption) => {
  // 创建xhr对象，兼容写法
  var xhr = window.XMLHttpRequest
    ? new XMLHttpRequest()
    : new ActiveXObject("Microsoft.XMLHTTP");

  let { method, url, params, success } = option;
  // 将method转换成大写
  method = method.toUpperCase();
  // 参数拼接
  var pair = [];
  for (var k in data) {
    pair.push(k + "=" + params[k]);
  }
  var str = pair.join("&");
  // 判断请求方法
  if (method === "GET") {
    // 字符串拼接 或者 模板字符串
    url += "?" + str;
  }
  xhr.open(method, url);

  var data = null;
  if (method === "POST") {
    // 需要请求头
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    data = str;
  }
  xhr.send(data);

  // 指定xhr状态变化事件处理函数
  // 执行回调函数
  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      // 返回的应该是一个对象，这样客户端更好渲染
      success(JSON.parse(xhr.responseText));
    }
  }
}