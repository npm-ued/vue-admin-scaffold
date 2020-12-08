<template>
  <div>
    {{ age }}
    <el-button @click="increate">add</el-button>
    <customList />
  </div>
</template>
<script>
import { ref, onMounted } from 'vue';
export default {
  name: 'userList',
  setup() {
    const age = ref(18);
    const increate = function () {
      age.value++;
    };
    onMounted(() => {
      // console.log('onMounted');
    });
    return { increate, age };
  }
};
</script>
