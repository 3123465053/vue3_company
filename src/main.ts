import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from "element-plus"
import 'element-plus/dist/index.css'

//@ts-ignore   忽略类型检测，避免打包时错误
import  zh_cn  from 'element-plus/dist/locale/zh-cn.mjs'



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

//将应用挂载到挂载点上
app.mount('#app')
