import axios from 'axios';
import message from 'antd/lib/message';
import { HashRouter } from "react-router-dom";
const router = new HashRouter();

const request = axios.create({});

// 添加请求拦截器
request.interceptors.request.use(request => {
  //在发送请求之前做些什么
  const token = window.localStorage.getItem('jwt_token');
  if (token) {
    request.headers['Authorization'] = `Bearer ${token}`;
  }
  //console.log('request',request)
  return request;
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
request.interceptors.response.use(response => {
  // 对响应数据做点什么
  if (response.data.token) {
    window.localStorage.setItem('jwt_token', response.data.token);
  }
  if (response.data.status === 401) {
    window.localStorage.removeItem('jwt_token');
    message.error(response.data.msg);
    router.history.replace('/login');
  }
  return response;
}, error => {
  //对响应错误做点什么
  return Promise.reject(error);
});

export default request;