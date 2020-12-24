<template>
  <div>
    {{ age }}
    <el-button @click="increate">add</el-button>
    {{ name }}
    <el-button @click="change">change</el-button>
    <customList />
  </div>
</template>
<script>
import { ref, onMounted, computed, getCurrentInstance } from 'vue';
export default {
  name: 'userList',
  setup() {
    const instance = getCurrentInstance();
    const $store = instance
      ? instance.appContext.config.globalProperties.$store
      : null;
    const age = ref(18);
    // const name = ref('');
    const increate = function () {
      age.value++;
    };
    onMounted(() => {
      // console.log('onMounted');
    });
    const name = computed(() => {
      return $store ? $store.state.app.name : '';
    });
    const change = function () {
      $store.commit('app/change', 'aaa');
    };
    return { increate, age, name, change };
  }
};
</script>
