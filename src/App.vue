<template>
  <h1>一级标题</h1>
  <el-button type="primary" size="default" :icon="Edit"></el-button>
  <h2>svg图标加载</h2>

  <!-- 自己封装了一次 -->
   <svg-icon name="phone" color="red" width="20px"></svg-icon>

 <!-- 直接使用 -->
    <!-- <svg>
      <use xlink:href="#icon-phone" fill="red"></use>
    </svg> -->
</template>

<script setup lang="ts">
import { Edit } from '@element-plus/icons-vue';
 import SvgIcon from '@/components/SvgIcon/index.vue'
</script>