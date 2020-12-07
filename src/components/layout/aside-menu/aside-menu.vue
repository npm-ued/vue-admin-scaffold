<template>
  <div class="aside-menu-wrapper">
    <!-- logo开始 -->
    <slot name="logo"></slot>
    <!-- logo结束 -->
    <!-- 导航开始 -->
    <el-menu
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-submenu v-for="(item, index) in menuList" :key="index">
        <template #title>
          <i class="el-icon-location"></i><span>{{ item.name }}</span>
        </template>
      </el-submenu>
      <el-submenu index="1">
        <template #title>
          <i class="el-icon-location"></i><span>导航一</span>
        </template>
        <el-menu-item-group>
          <template #title>分组一</template>
          <el-menu-item index="1-1">
            <div @click="turnPage('userList')">用户列表</div>
          </el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template #title>选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <template #title>导航二</template>
      </el-menu-item>
    </el-menu>
    <!-- 导航结束 -->
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import routers from '../../../router/modules'; // 获取路由配置
import menuListByRoutes from './composables/menuListByRoutes';

export default defineComponent({
  name: 'asideMenu',
  props: {
    collapsed: {
      // 控制menu收缩/展开
      type: Boolean
    },
    theme: {
      // menu样式：dark、light、primary 默认dark
      type: String,
      default: 'dark'
    },
    iconSize: {
      type: Number,
      default: 16
    },
    accordion: Boolean,
    activeName: {
      type: String,
      default: ''
    },
    openNames: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const menuList = menuListByRoutes(routers, []);
    return { menuList };
  }
});
</script>
<style>
.wrapper {
}
</style>
