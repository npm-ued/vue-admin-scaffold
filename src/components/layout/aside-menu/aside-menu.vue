<template>
  <el-aside :width="collapsed ? '256px' : '256px'">
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
        class="horizontal-collapse-transition"
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
    <!-- <el-menu
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="collapsed"
    >
      <el-submenu index="1">
        <template #title>
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template #title>分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
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
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <template #title>导航三</template>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <template #title>导航四</template>
      </el-menu-item>
    </el-menu> -->
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
  data() {
    return {
      isCollapse: false
    };
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
  height: 64px;
  line-height: 64px;
  padding-left: 30px;
}
</style>
