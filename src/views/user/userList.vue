<template>
  <div>userList</div>
</template>
<script>
import {
  ref,
  onMounted,
  computed,
  getCurrentInstance,
  watch,
  watchEffect
} from 'vue';
export default {
  name: 'userList',
  setup() {
    const a = ref(0);
    const b = ref(1);
    watch(() => {
      console.log('watch a+b', a.value + b.value);
    });

    watch(a, () => {
      console.log('watch a', a.value + b.value);
    });

    setTimeout(() => {
      a.value++;
    }, 1000);
    setTimeout(() => {
      b.value++;
    }, 2000);
    return {};
  }
};
</script>
