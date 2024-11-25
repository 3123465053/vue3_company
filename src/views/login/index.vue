<template>
    <div class="login_container">
     <el-row>
        <!-- 当尺寸小于768 时左侧占位的消失 -->
        <el-col :span="12" :xs="0"></el-col>
        <el-col :span="12" :xs="24">
            <el-form class="login_form" :model="loginFrom" :rules="rules" ref="loginFroms">
                <h1>Hello</h1>
                <h2>欢迎来到硅谷甄选</h2>
                <!-- prop 校验字段 -->
                <el-form-item prop="username">
                    <el-input  class="input" :prefix-icon="User" v-model="loginFrom.username"></el-input>
                </el-form-item>

                <el-form-item prop="password">
                    <el-input type="password" :prefix-icon="Lock" v-model="loginFrom.password" show-password='true'></el-input>
                </el-form-item>

                <el-form-item >
                 <el-button type="primary" class="login_button" @click="login" :loading="loading">登录</el-button>
                </el-form-item>
            </el-form>
        </el-col>
     </el-row>

    </div>
</template>

<script setup lang="ts">
import {User,Lock} from '@element-plus/icons-vue'
import {reactive,ref} from 'vue'
import { useRouter } from 'vue-router';
import { ElNotification, FormRules } from 'element-plus';
import useUserStore from '@/store/modules/user';
import { getTime } from '@/utils/time';

let useStore=useUserStore();
let $router=useRouter();
let loginFrom=reactive({username:'admin',password:"111111"})
let loading=ref(false);
//获取表单校验结果
let loginFroms=ref()

//表单校验规则
const rules=reactive<FormRules>(
     {
        username:[  
             //该字段必须校验  错误提示信息 提示触发时机（失去焦点时）
             { required:true,message:"用户名不能为空",trigger:'blur'},  //校验规则（一个对象一个规则）
             { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
            ],
            password:[
            { required:true,min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
            ]
   }
)

//登陆
const login=async()=>{
    //校验成功之后才提交
     await loginFroms.value.validate();

    loading.value=true;
    try{
        await useStore.userLogin(loginFrom);
        //登陆成功跳转到首页
        $router.push('/')
        ElNotification({
            type:"success",
            title:`HI,${getTime()}好`,
            message:"欢迎回来",
        })
        loading.value=false;
    }catch(e){
       ElNotification({
        type:"error",
        message:"登陆失败"
       })
       loading.value=false;
    }
}

</script>

<style lang="scss">
  .login_container{
    width: 100%;
    // 视图高度
    height: 100vh;   
    background: url('@/assets/images/background.jpg') no-repeat;
    background-size: cover;  
  }

  .login_form{
    position: relative;
    top: 30vh;
    width: 80%;  
    background-color: rgba($color: #000000, $alpha: 0.1);
    padding: 30px;
    border-radius: 15px;
    h1{
        font-size: 40px;
        color:white;
    }
    h2{
        font-size: 30px;
        color:white;
    }
     .input{
        //margin-bottom: 20px;
     } 
     .login_button{
       // margin-top: 20px;
        width: 100%;
     }
     
     
  }
  


</style>