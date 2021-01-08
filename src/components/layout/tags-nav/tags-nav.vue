<template>
  <div class="tagNavWrapper">
    <div class="scrollOuter" ref="tagWrap">
      <div class="scrollBody">
        <label
          v-for="(item, index) in tagNavList"
          :key="index"
          :ref="isCurrentTag(current, item) ? setRef : ''"
        >
          <el-tag
            :closable="item.name !== 'home'"
            :effect="isCurrentTag(current, item) ? 'dark' : 'plain'"
            class="navTag"
            @close="closeTag(item)"
            @click="handleClick(item)"
          >
            <i class="navTagDot"></i>
            {{ $t(item.title || '') }}
          </el-tag>
        </label>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, computed, watch, nextTick } from 'vue';
import { RouteLocationNormalizedLoaded, useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { key } from '@/store';
import setTagNavList from './composables/setTagNavList';
import isCurrentTag from './composables/isCurrentTag';
import createTagOpreate from './composables/createTagOpreate';

export default defineComponent({
  name: 'tagsNav',
  setup() {
    const tagBodyLeft = ref(0);
    const route: RouteLocationNormalizedLoaded = useRoute();
    const store = useStore(key);
    const tagNavList = computed(() => store.state.app.tagNavList);
    const current = ref(''); // 当前路由name
    const tagWrap = ref<any>(null);
    const targetRef = ref<any>(null);

    const setRef = (el: any) => {
      targetRef.value = el;
      nextTick(() => {
        const targetOffsetLeft = el?.offsetLeft;
        const wrap = tagWrap.value as HTMLElement;
        wrap.scrollLeft = targetOffsetLeft;
      });
    };
    // 监听route变化
    watch(
      route,
      (newRouter) => {
        // 回调函数
        const { currentName } = setTagNavList(newRouter);
        current.value = currentName as string;
      },
      {
        immediate: true,
        deep: true
      }
    );
    const { closeTag, handleClick } = createTagOpreate();

    return {
      tagBodyLeft,
      tagNavList,
      isCurrentTag,
      current,
      closeTag,
      handleClick,
      tagWrap,
      setRef
    };
  }
});
</script>
<style scoped>
.tagNavWrapper {
  background-color: #f0f0f0;
}
.scrollOuter {
  height: 37px;
  padding: 1px 4px 0;
  overflow-x: auto;
}
.scrollBody {
  white-space: nowrap;
  position: relative;
}
.navTag {
  margin: 2px 4px 2px 0;
  cursor: pointer;
}
.navTagDot {
  width: 10px;
  height: 10px;
  border-radius: 5px;
  display: inline-block;
  background-color: #2d8cf0;
}
</style>
