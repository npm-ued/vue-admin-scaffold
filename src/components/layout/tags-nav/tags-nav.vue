<template>
  <div class="tagNavWrapper">
    <div class="scrollOuter">
      <div class="scrollBody" ref="tagWrap">
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
  <!-- <el-tabs type="card" closable @tab-remove="removeTab">
    <el-tab-pane
      v-for="(item, index) in tagNavList"
      :key="index"
      :label="$t(item.title || '')"
      :name="item.name"
    >
    </el-tab-pane>
  </el-tabs> -->
</template>
<script lang="ts">
import {
  defineComponent,
  ref,
  computed,
  getCurrentInstance,
  watch,
  onMounted,
  nextTick
} from 'vue';
import { RouteLocationNormalizedLoaded, useRoute } from 'vue-router';
import { useStore } from 'vuex';
import setTagNavList from './composables/setTagNavList';
import isCurrentTag from './composables/isCurrentTag';
import createTagOpreate from './composables/createTagOpreate';
import { TagNav } from './tags-nav';
import computeScroll from './composables/computeScroll';

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
    const $store = useStore();
    const tagNavList = computed(() => $store.state.app.tagNavList);
    const current = ref(''); // 当前路由name
    const tagWrap = ref<any>(null);
    const targetRef = ref<any>(null);

    const setRef = (el: any) => {
      targetRef.value = el;
      nextTick(() => {
        const targetOffsetLeft = el?.offsetLeft;
        console.log(targetOffsetLeft);
        const wrap = tagWrap.value as HTMLElement;
        console.dir(wrap);
        wrap.scrollLeft = 100;
      });
    };
    // 监听route变化
    watch(
      route,
      (newRouter) => {
        // 回调函数
        const { currentName } = setTagNavList(newRouter, $store);
        current.value = currentName as string;
      },
      {
        immediate: true,
        deep: true
      }
    );
    const { closeTag, handleClick } = createTagOpreate(router, route, $store);

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
  overflow: hidden;
  overflow-x: auto;
}
.scrollOuter {
  height: 37px;
  padding: 1px 4px 0;
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
