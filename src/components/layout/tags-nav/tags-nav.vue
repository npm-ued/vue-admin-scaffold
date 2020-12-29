<template>
  <div class="tagNavWrapper">
    <div class="scroll-outer">
      <div class="scrollBody">
        <el-tag
          :closable="item.name !== 'home'"
          v-for="(item, index) in tagNavList"
          :effect="isCurrentTag(current, item) ? 'dark' : 'plain'"
          :key="index"
          class="navTag"
          @close="closeTag(item)"
          @click="handleClick(item)"
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
import isCurrentTag from './composables/isCurrentTag';
import createTagOpreate from './composables/createTagOpreate';
import { TagNav } from './tags-nav';

export default defineComponent({
  name: 'tagsNav',
  methods: {
    // closeTag(item: any) {
    //   console.log(item, 'method close');
    // }
  },
  setup() {
    const tagBodyLeft = ref(0);
    // 获取router跳转对象
    const instance = getCurrentInstance();
    const router = instance
      ? instance.appContext.config.globalProperties.$router
      : null;
    const route: RouteLocationNormalizedLoaded = useRoute();
    const navList: TagNav[] = [];
    const $store = useStore();
    const tagNavList = ref(navList);
    const current = ref(''); // 当前路由name
    // 监听route变化
    watch(
      route,
      (newRouter) => {
        // 回调函数
        const { navList, currentName } = setTagNavList(newRouter, $store);
        tagNavList.value = navList;
        current.value = currentName as string;
      },
      {
        immediate: true,
        deep: true
      }
    );
    const { closeTag, handleClick } = createTagOpreate(router, $store);
    return {
      tagBodyLeft,
      tagNavList,
      isCurrentTag,
      current,
      closeTag,
      handleClick
    };
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
  cursor: pointer;
}
</style>
