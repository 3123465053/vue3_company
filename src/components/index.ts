//当全局组件较多时
//用于注册所有的全局组件
import SvgIcon from './SvgIcon/index.vue';
//多个组件之间用逗号隔开
const allGloablComponent={SvgIcon};

export default {
    //@ts-ignore
    install(app){
        Object.keys(allGloablComponent).forEach(key=>{
             //@ts-ignore
            app.component(key,allGloablComponent[key]);
        });
    }
}