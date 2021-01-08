import { computed, ref } from 'vue';
import { key } from '@/store';
import { useStore } from 'vuex';

function getCacheList() {
  const $store = useStore(key);
  // 获取tag-navs
  const tagNavList = computed(() => {
    return $store.state.app.tagNavList;
  });
  const list = tagNavList.value.length
    ? tagNavList.value
        .filter((item: any) => !(item.meta && item.mate?.notCache))
        .map((item: any) => item.name)
    : [];
  // keep-alive
  const cacheList = ref(['commonRouterView', ...list]);
  return { cacheList };
}
export default getCacheList;
