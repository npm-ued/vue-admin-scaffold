<template>
  <el-container direction="horizontal">
    <asideMenu :collapsed="collapsed">
      <template #logo>
        <div class="logo-con">Vue3.0 Admin</div>
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
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    };
    return {
      tableData: Array(20).fill(item),
      isShowBg: true,
      collapsed: false
    };
  },
  methods: {
    // 左侧展开/收缩
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

.el-header {
  background-color: #ffffff;
  color: #333;
  line-height: 64px;
  height: 64px;
}

.el-aside {
  color: #333;
}
.bgWelcome {
  max-width: 600px;
  margin: 100px auto;
}
</style>
