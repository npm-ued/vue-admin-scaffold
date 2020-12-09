<template>
  <div>
    <h1>userInfo</h1>
    <el-button @click="routerTo">to</el-button>
    <customCard />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, getCurrentInstance } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
  name: 'userInfo',
  setup(props) {
    const instance = getCurrentInstance();
    console.log(instance);
    // const router = useRouter();
    const routerTo = function () {
      // age.value++;
      // useRouter();
      // router.push({
      // path: '/'
      // });
      const router = instance
        ? instance.appContext.config.globalProperties.$router
        : null;
      console.log(router);
      if (router) {
        router.push({ path: '/system/userList' });
      }
      console.log('跳转');
    };
    return { routerTo };
  }
});
</script>
