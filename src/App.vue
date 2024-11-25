<template>
 <!-- <div> -->
  <!-- <h1>一级标题</h1>
 </div>
  <el-button type="primary" size="default" :icon="Edit"></el-button>
  <h2>svg图标加载</h2> -->

  <!-- 自己封装了一次 -->
   <!-- <svg-icon name="phone" color="red" width="60px" height="60px"></svg-icon> -->

 <!-- 直接使用 -->
    <!-- <svg>
      <use xlink:href="#icon-phone" fill="red"></use>
    </svg> -->
    <RouterView></RouterView>
</template>

<script setup lang="ts">
import { Edit } from '@element-plus/icons-vue';
//  import SvgIcon from '@/components/SvgIcon/index.vue'
import request from './utils/request';
import { onMounted } from 'vue';
import { reqLogin } from './api/user';

onMounted(()=>{

// request({
//   url:"/user/login",
//   method:"post",
//   data:{
//     username:"admin",
//     passworf:'111111'
//   }}).then((res)=>{
//   console.log(res)
//   })


//自己封装的登录请求函数
  reqLogin({username:"admin",password:"111111"})
})


</script>

<style scoped lang="scss">
  div {
    h1{
   color: $color
   }
  }
</style>