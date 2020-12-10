<template>
  <div>
    <h1>userInfo</h1>
    <el-button @click="toTurn">to1</el-button>
    <el-button @click="getUserInfo">to2</el-button>
    <customCard />
    {{ test }}
  </div>
</template>
<script lang="ts">
import Vue, { defineComponent, ref, getCurrentInstance, onMounted } from 'vue';
import getUserInfoList from './composables/getUserInfo';
import { useRouter } from 'vue-router';
export default defineComponent({
  name: 'userInfo',
  setup(props) {
    const instance = getCurrentInstance();
    const router = useRouter();
    const toTurn = function () {
      router.push({ path: '/' });
    };

    const $ajax = instance
      ? instance.appContext.config.globalProperties.$ajax
      : null;
    const { getUserInfo } = getUserInfoList($ajax, router);
    // return { getUserInfo };
    return { toTurn, getUserInfo };
  }
});
</script>
