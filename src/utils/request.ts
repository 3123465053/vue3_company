import axios from "axios";
import { ElMessage } from "element-plus";


//1.创建实例
let request = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API, //基础地址
    timeout: 5000                      //超时时间
})


//2.添加请求拦截器  
request.interceptors.request.use((config) => {
    //可以添加请求头等请求公共参数
    console.log(config)

    return config;
})

//3.添加响应拦截器
request.interceptors.response.use((response) => {
    return response.data
}, (error) => {

    let msg = "";
    let status = error.response.status;
    switch (status) {
        case 401:
            msg = "token过期";
            break;
        case 403:
            msg = '无权访问';
            break;
        case 404:
            msg = "请求地址错误";
            break;
        case 500:
            msg = "服务器错误";
            break;
        default:
            msg = "网络出现错误";
    }

    ElMessage({
        type:'error',
        message:msg
    })
    return Promise.reject(error)

})


export default request;