<template>
  <el-container direction="horizontal">
    <asideMenu :collapsed="collapsed">
      <template #logo>
        <div class="big-logo" v-if="!collapsed">Vue3.0 Admin</div>
        <img v-else :src="minLogo" key="min-logo" class="logo-mini" />
      </template>
    </asideMenu>
    <el-container direction="vertical">
      <headerBar @on-change="handleCollapsedChange" />
      <el-main>
        <div class="content-wrapper">
          <router-view />
          <img
            v-if="isShowBg"
            class="bgWelcome"
            src="../../assets/image/welcome.png"
            alt="欢迎"
          />
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import AsideMenu from '../../components/layout/aside-menu';
import HeaderBar from '../../components/layout/header-bar';

export default defineComponent({
  name: 'home',
  data() {
    return {
      isShowBg: true,
      collapsed: false, // 是否缩略模式
      minLogo: require('../../assets/image/index_title.png'), // 小lOGO
      maxLogo: require('../../assets/image/index_title.png') // 大 logo
    };
  },
  methods: {
    turnPage(name: string) {
      this.$router.push({ name });
    },
    gotoContent(e: Event) {
      e.preventDefault();
    },
    handleCollapsedChange(state: boolean) {
      this.collapsed = state;
    }
  },
  watch: {
    $route(newRoute) {
      // 面包屑设置
      this.isShowBg = newRoute.name === 'home';
    }
  },
  mounted() {
    this.isShowBg = this.$route.name === 'home';
  },
  components: {
    AsideMenu,
    HeaderBar
  }
});
</script>

<style>
.el-menu {
  height: 100%;
}
.content-wrapper {
  background-color: #ffffff;
  padding: 10px;
}

.el-aside {
  color: #333;
}
.bgWelcome {
  max-width: 600px;
  margin: 100px auto;
}
.logo-mini {
  width: 24px;
  height: 24px;
  margin: 10px auto;
  display: block;
  overflow: hidden;
}
</style>
