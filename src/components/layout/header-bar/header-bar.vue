<template>
  <el-header>
    <a @click="handleChange" :class="collapsed ? 'collapsed' : ''">
      <i class="el-icon-s-fold collapseIcon" :size="40" />
    </a>
    <div class="custom-bread-crumb">
      <breadcrumbList separator="/" :breadList="list" />
    </div>
    <a @click="changeLanguage">
      {{ $t('CurrentLan') }}: {{ $t('LocaleLanguage') }}
    </a>
  </el-header>
</template>
<script lang="ts">
import BreadcrumbList from './breadcrumbList.vue';
import { defineComponent, ref, watch } from 'vue';
import { useRoute, RouteLocationNormalizedLoaded } from 'vue-router';
import getBreadcrumbList from './composables/getBreadcrumbList';
import { changeLanguage } from '../../../i18n';
export default defineComponent({
  name: 'headerBar',
  data() {
    return { collapsed: false };
  },
  methods: {
    // 菜单伸缩
    handleChange() {
      this.collapsed = !this.collapsed;
      this.$emit('on-change', this.collapsed);
    }
  },
  setup() {
    // 监听路由发生变化，显示面包屑
    const route: RouteLocationNormalizedLoaded = useRoute();
    const list = ref(getBreadcrumbList(route));
    // TODO runtime-core.esm-bundler.js?5c40:38 [Vue warn]: Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead
    watch(
      route,
      () => {
        // 回调函数
        list.value = getBreadcrumbList(route);
      },
      {
        immediate: true,
        deep: true
      }
    );
    return { list, changeLanguage };
  },
  components: {
    BreadcrumbList
  }
});
</script>
<style>
.collapseIcon {
  font-size: 20px;
  cursor: pointer;
  transition: transform 0.3s, transform 0.3s;
}
.collapsed i {
  transform: rotateZ(-90deg);
}
.custom-bread-crumb {
  display: inline-block;
  vertical-align: top;
  margin-left: 10px;
}
.el-header {
  background-color: #ffffff;
  color: #333;
  line-height: 50px;
  height: 50px !important;
}
.custom-bread-crumb .el-breadcrumb {
  line-height: inherit;
}
</style>
