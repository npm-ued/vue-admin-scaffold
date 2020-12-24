<template>
  <div class="tagNavWrapper">
    <div class="scroll-outer">
      <div class="scrollBody">
        <el-tag
          closable
          v-for="(item, index) in tagNavList"
          :key="index"
          effect="plain"
          class="navTag"
        >
          {{ $t(item.title || '') }}
        </el-tag>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, computed, getCurrentInstance, watch } from 'vue';
import { RouteLocationNormalizedLoaded, useRoute } from 'vue-router';
import { useStore } from 'vuex';
import setTagNavList from './composables/setTagNavList';
import { TagNav } from './tags-nav';
export default defineComponent({
  name: 'tagsNav',
  setup() {
    const tagBodyLeft = ref(0);
    const route: RouteLocationNormalizedLoaded = useRoute();
    const navList: TagNav[] = [];
    const $store = useStore();
    const tagNavList = ref(navList);
    // 监听route变化
    watch(
      () => route,
      () => {
        // 回调函数
        // tagNavList.value = setTagNavList(route, $store);
      },
      {
        immediate: true,
        deep: true
      }
    );
    return { tagBodyLeft, tagNavList };
  }
});
</script>
<style scoped>
.tagNavWrapper {
  background-color: #f0f0f0;
  padding: 5px;
}
.scrollBody {
  padding: 1px 4px 0;
}
.navTag {
  margin: 2px 4px 2px 0;
}
</style>
