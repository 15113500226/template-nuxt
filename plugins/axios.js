/*
 * @Descripttion:
 * @version:
 * @Author: hzf
 * @Date: 2022-01-14 14:41:42
 * @LastEditors: hzf
 * @LastEditTime: 2022-01-14 16:01:08
 */
import axios from 'axios';

export default function({ $axios }) {
  $axios.all = axios.all;
  $axios.spread = axios.spread;

  // $axios.onRequest(req => { // 请求拦截
  // });

  $axios.onResponse(res => { // 响应拦截
    return res.data;
  });

  $axios.onError(err => { // 请求出错
    const response = {
      code: 0,
      message: '',
      data: {},
    };
    if (err.response) { // 请求已发出，但服务器使用状态代码进行响应
      response.code = err.response.status;
      response.message = '请求服务器出错！错误状态码：' + err.response.status;
    } else if (err.__CANCEL__) { // 手动取消请求
      response.type = 'warning';
      response.message = err.message;
    } else if (err.code == 'ECONNABORTED') { // 请求超时
      response.message = '请求服务器超时！';
    } else { // 连接服务器失败
      response.message = '无法连接服务器！';
    }
    return response;
  });
}
