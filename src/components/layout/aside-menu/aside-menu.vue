<template>
  <el-aside :width="collapsed ? '64px' : '256px'">
    <div class="aside-menu-wrapper">
      <!-- logo开始 -->
      <div
        :style="`background-color:${asideMenu.backgroundColor}`"
        class="logoWrapper"
      >
        <slot name="logo"></slot>
      </div>
      <!-- logo结束 -->
      <!-- 导航开始 -->
      <el-menu
        :background-color="asideMenu.backgroundColor"
        :text-color="asideMenu.textColor"
        :active-text-color="asideMenu.activeTextColor"
        :collapse="collapsed"
        class="el-menu-vertical-demo"
      >
        <template v-for="(item, index) in menuList">
          <el-submenu
            :index="`${index}`"
            :key="index"
            v-if="item.children && item.children.length > 0"
          >
            <template #title>
              <i :class="item.icon"></i><span>{{ item.name }}</span>
            </template>
            <template
              v-for="(subItem, subIndex) in item.children"
              :index="`${index}-${subIndex}`"
              :key="subIndex"
            >
              <el-submenu
                v-if="subItem.children && subItem.children.length > 0"
              >
                <template #title>{{ subItem.name }}</template>
                <el-menu-item
                  v-for="(lastItem, lastIndex) in subItem.children"
                  :index="`${index}-${subIndex}-${lastIndex}`"
                  :key="lastIndex"
                >
                  {{ lastItem.name }}
                </el-menu-item>
              </el-submenu>
              <el-menu-item-group v-else>
                <el-menu-item :key="subIndex" :index="`${index}-${subIndex}`">
                  <div @click="turnPage(subItem.name)">
                    {{ subItem.name }}
                  </div>
                </el-menu-item>
              </el-menu-item-group>
            </template>
          </el-submenu>
          <el-menu-item :index="`${index}`" :key="index + 'ele'" v-else>
            <i :class="item.icon"></i>
            <template #title>{{ item.name }}</template>
          </el-menu-item>
        </template>
      </el-menu>
      <!-- 导航结束 -->
    </div>
  </el-aside>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import routers from '../../../router/modules'; // 获取路由配置
import menuListByRoutes from './composables/menuListByRoutes';
import { asideMenu } from '../../../assets/config/theme';

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
  methods: {
    turnPage(name: string) {
      this.$router.push({ name });
    },
    gotoContent(e: Event) {
      e.preventDefault();
    }
  },
  setup(props) {
    const menuList = menuListByRoutes(routers, ['borrower_user_list']);
    return { menuList, asideMenu };
  }
});
</script>
<style>
.logoWrapper {
  color: #ffffff;
  font-size: 24px;
  height: 48px;
  padding: 12px 10px 0px 10px;
  text-align: center;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 256px;
}
.wrapper {
}
</style>
