<template>
  <div>
    <h1>userInfo</h1>
    <el-button @click="toTurn">to1</el-button>
    <el-button @click="getUserInfo">to2</el-button>
    <customCard />
    <el-input v-model="model.name" placeholder="请输入内容"></el-input>
    {{ model.name }}
    <el-input v-model="model.uname" placeholder="请输入内容"></el-input>
    {{ model.uname }}
    <el-date-picker
      v-model="model.start"
      type="date"
      placeholder="选择日期"
    ></el-date-picker>
    <el-button @click="clear">重置</el-button>
  </div>
</template>
<script lang="ts">
import { defineComponent, getCurrentInstance, reactive, ref } from 'vue';
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
    // const input = '';
    let model = reactive({
      name: '',
      uname: '',
      start: ''
    });

    const clear = function () {
      model = reactive({
        name: '',
        uname: '',
        start: ''
      });
    };

    return { toTurn, getUserInfo, model, clear };
  }
});
</script>
