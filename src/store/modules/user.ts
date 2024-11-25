//全局用户信息
import { reqLogin } from '@/api/user';
import { loginForm } from '@/api/user/type';
import { defineStore } from 'pinia';
import {setToken,getToken} from '@/utils/token'

//@ts-ignore
let useUserStore=defineStore('User',{
    //存放数据
    state:()=> {
        return {
            token:getToken()
        }
    },
    //方法
    actions:{
        async userLogin(data:loginForm){
            let res:any=await reqLogin(data);
            if(res.code===200){
                this.token=res.data.token;
                //将token存储到本地
                // localStorage.setItem('token',res.data.token)
                setToken(res.data.token)
                return 'ok'
            }
            else{
                //失败返回 可被try catch捕获
                return Promise.reject(res.code.message)
            }
        }
    },
    getters:()=>{}
})

export default useUserStore;