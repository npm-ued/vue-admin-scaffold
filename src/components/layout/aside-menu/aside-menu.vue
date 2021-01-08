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
        :default-active="menuActive.activeName"
        :default-openeds="menuActive.openNames"
      >
        <template v-for="(item, index) in menuList">
          <el-submenu
            :index="`${item.name}`"
            :key="index"
            v-if="item.children && item.children.length > 0"
          >
            <template #title>
              <i :class="item.icon" />
              <span>{{ $t(item.meta.title || '') }}</span>
            </template>
            <template
              v-for="(subItem, subIndex) in item.children"
              :index="`${subItem.name}`"
              :key="subIndex"
            >
              <el-submenu
                v-if="subItem.children && subItem.children.length > 0"
              >
                <template #title>{{ $t(subItem.mate.title || '') }}</template>
                <el-menu-item
                  v-for="(lastItem, lastIndex) in subItem.children"
                  :index="`${lastItem.name}`"
                  :key="lastIndex"
                >
                  {{ $t(lastItem.meta.title) }}
                </el-menu-item>
              </el-submenu>
              <el-menu-item-group v-else>
                <el-menu-item :key="subIndex" :index="`${subItem.name}`">
                  <div @click="turnPage(subItem.name)">
                    {{ $t(subItem.meta.title || '') }}
                  </div>
                </el-menu-item>
              </el-menu-item-group>
            </template>
          </el-submenu>
          <el-menu-item :index="`${item.name}`" :key="index + 'ele'" v-else>
            <i :class="item.icon"></i>
            <template #title>
              <a @click="turnPage(item.name)">
                {{ $t(item.meta.title || '') }}
              </a>
            </template>
          </el-menu-item>
        </template>
      </el-menu>
      <!-- 导航结束 -->
    </div>
  </el-aside>
</template>
<script lang="ts">
import { defineComponent, watch, ref } from 'vue';
import { useRoute, RouteLocationNormalizedLoaded, useRouter } from 'vue-router';
import routers from '../../../router/modules'; // 获取路由配置
import menuListByRoutes from './composables/menuListByRoutes';
import { asideMenu } from '../../../assets/config/theme';
import getActiveAndOpenName from './composables/getActiveName';

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
    accordion: Boolean
  },
  setup() {
    const route: RouteLocationNormalizedLoaded = useRoute();
    const menuActive = ref(getActiveAndOpenName(route));
    // 监听route变化
    watch(
      route,
      () => {
        // 回调函数
        menuActive.value = getActiveAndOpenName(route);
      },
      {
        immediate: true,
        deep: true
      }
    );
    const menuList = menuListByRoutes(routers, ['borrower_user_list']);
    const router = useRouter();
    const turnPage = (name: string) => {
      router.push({ name });
    };
    return { menuList, asideMenu, menuActive, turnPage };
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
