/**
 * @author mr.hou
 * @date 2021/11/05
 * @description 封装request请求
 */
import axios from 'axios';
const service = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(config => {
    // 在发送请求之前做些什么
    return config
}, error => {
    // 对请求错误做些什么
    console.log(error) // for debug
    return Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use(response => {
    // 对响应数据做点什么
    return response.data
}, error => {

    // 对响应错误做点什么
    console.log(error) // for debug
    return Promise.reject(error)
})

export default service