import { onMounted, watch, ref } from 'vue';
import { useRoute } from 'vue-router';

function isHomePage() {
  const isShowBg = ref(true);
  const route = useRoute();
  // 监听路由变化
  watch(
    route,
    () => {
      isShowBg.value = route.name == 'home';
    },
    {
      immediate: true,
      deep: true
    }
  );
  onMounted(() => {
    isShowBg.value = route.name == 'home';
  });
  return { isShowBg };
}
export default isHomePage;
