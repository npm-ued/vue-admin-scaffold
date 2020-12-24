<template>
  <keep-alive :include="cacheList">
    <router-view />
  </keep-alive>
</template>
<script lang="ts">
import { computed, defineComponent, getCurrentInstance } from 'vue';
export default defineComponent({
  name: 'commonRouterView',
  setup() {
    const instance = getCurrentInstance();
    const $store = instance?.appContext.config.globalProperties.$store;
    const cacheList = computed(() => {
      const list = $store.state.app.tagNavList;
      return list.length
        ? list
            .filter((item) => !(item.meta && item.mate.notCache))
            .map((item) => item.name)
        : [];
    });
    return { cacheList };
  }
});
</script>
