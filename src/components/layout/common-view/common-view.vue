<template>
  <keep-alive :include="cacheList">
    <router-view />
  </keep-alive>
</template>
<script lang="ts">
import { key } from '@/store';
import { computed, defineComponent, getCurrentInstance } from 'vue';
import { useStore } from 'vuex';
export default defineComponent({
  name: 'commonRouterView',
  setup() {
    const instance = getCurrentInstance();
    console.log(instance);
    const store = useStore(key);
    const cacheList = computed(() => {
      const list = store.state.app.tagNavList;
      return list.length
        ? list
            .filter((item: any) => !(item.meta && item.mate.notCache))
            .map((item: any) => item.name)
        : [];
    });
    return { cacheList };
  }
});
</script>
