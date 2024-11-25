import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from "element-plus"
import 'element-plus/dist/index.css'

//@ts-ignore   忽略类型检测，避免打包时错误
import  zh_cn  from 'element-plus/dist/locale/zh-cn.mjs'
import router from './router'
import pinia from './store'

//获取应用实例对象
const app=createApp(App)

//安装element-plus插件
app.use(ElementPlus,{
    locale:zh_cn      //element-plus 国际化配置
})
 
console.log(import.meta.env)

//svg插件需要配置代码
//@ts-ignore
import 'virtual:svg-icons-register'

//当全局组件较多时 此方法不适用(使用下面的方法)
//将自定义的组件设置为全局组件
// import SvgIcon from '@/components/SvgIcon/index.vue';
// app.component('SvgIcon',SvgIcon);  // “SvgIcon” 使用名称 

//当全局组件较多时，使用此方法 单独封装一个文件
//@ts-ignore
import gloalComponent from '@/components';
app.use(gloalComponent)

//引入全局模版样式
import '@/style/index.scss'

//测试接口代码
import axios from 'axios'
axios({
    url:"/api/user/login",
    method:"post",
    data:{
        username:"admin",
        password:"111111"
    }
})

//注册路由
app.use(router)

//注册本地存储
app.use(pinia);

//将应用挂载到挂载点上
app.mount('#app')
