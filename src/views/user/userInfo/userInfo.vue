<template>
  <div>
    <h1>userInfo</h1>
    <el-button @click="toTurn">to1</el-button>
    <el-button @click="getUserInfo">to2</el-button>
    <customCard />
  </div>
</template>
<script lang="ts">
import { defineComponent, getCurrentInstance } from 'vue';
import getUserInfoList from './composables/getUserInfo';
import { useRouter } from 'vue-router';
export default defineComponent({
  name: 'userInfo',
  setup() {
    const instance = getCurrentInstance();
    const router = useRouter();
    const toTurn = function () {
      router.push({ path: '/' });
    };

    const $ajax = instance
      ? instance.appContext.config.globalProperties.$ajax
      : null;
    const { getUserInfo } = getUserInfoList($ajax);
    return { toTurn, getUserInfo };
  }
});
</script>
