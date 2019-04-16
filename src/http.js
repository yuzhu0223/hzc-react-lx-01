// 封装axios

import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8086/'

// 请求拦截器
axios.interceptors.request.use(function (config) {
  if (config.url ==="/login" || config.url === "/homes/swipe"){
    return config
  } else {
    const token = window.localStorage.getItem('token')
    config.headers['Authorization'] = token
    return config
  }
}, function (error) {
  return Promise.reject(error)
});

// 响应拦截器
axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response.data
}, function (error) {
  return Promise.reject(error)
})

export default axios
