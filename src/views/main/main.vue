<template>
  <el-container>
    <el-aside width="256px">
      <asideMenu :menuList="menuList">
        <template #logo>
          <div class="logo-con">logo</div>
        </template>
      </asideMenu>
    </el-aside>
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>
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

export default defineComponent({
  name: 'main',
  data() {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    };
    return {
      tableData: Array(20).fill(item),
      isShowBg: true
    };
  },
  methods: {
    turnPage(name) {
      this.$router.push({ name });
    },
    gotoContent(e) {
      e.preventDefault();
    }
  },
  watch: {
    $route(newRoute) {
      // 面包屑设置
      this.isShowBg = newRoute.name === 'home';
    }
  },
  mounted() {
    console.log('mounted');
    this.isShowBg = this.$route.name === 'home';
    console.log(this.isShowBg);
    // console.log(routers);
  },
  components: {
    AsideMenu
  }
});
</script>

<style>
.el-menu {
  height: 100%;
}
.content-wrapper {
  background-color: #ffffff;
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
