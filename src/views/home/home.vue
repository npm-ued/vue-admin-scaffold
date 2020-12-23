<template>
  <el-container direction="horizontal" class="contWrap">
    <asideMenu :collapsed="collapsed">
      <template #logo>
        <div class="big-logo" v-if="!collapsed">
          <img :src="minLogo" key="max-logo" class="logo-big" />
          {{ $t('SystemName') }}
        </div>
        <img v-else :src="minLogo" key="min-logo" class="logo-mini" />
      </template>
    </asideMenu>
    <el-container direction="vertical">
      <headerBar @on-change="handleCollapsedChange" />
      <tagsNav />
      <el-main>
        <div class="content-wrapper">
          <router-view />
          <img
            v-if="isShowBg"
            class="bgWelcome"
            src="../../assets/image/welcome.png"
            :alt="welcome"
          />
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import AsideMenu from '../../components/layout/aside-menu';
import HeaderBar from '../../components/layout/header-bar';
import TagsNav from '../../components/layout/tags-nav';

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
  setup() {
    const { t } = useI18n();
    const welcome = t('Common.Welcome'); // 获取welcome的国际化值
    return { welcome };
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
    HeaderBar,
    TagsNav
  }
});
</script>

<style scoped>
.contWrap {
  height: 100%;
}
.el-menu {
  height: 100%;
}
.content-wrapper {
  background-color: #ffffff;
  padding: 10px;
  box-sizing: border-box;
  min-height: 100%;
  position: relative;
}

.el-aside {
  color: #333;
}
.bgWelcome {
  max-width: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -250px auto auto -250px;
}
.logo-mini {
  width: 24px;
  height: 24px;
  margin: 10px auto;
  display: block;
  overflow: hidden;
}
.logo-big {
  width: 24px;
  height: 24px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
}
</style>
