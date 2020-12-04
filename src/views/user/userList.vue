<template>
  <div>
    {{ count }}
    <el-button @click="add">add</el-button>
    {{ age }}
    <el-button @click="increate">add</el-button>
  </div>
</template>
<script>
import { ref, onMounted } from 'vue';
export default {
  name: 'userList',
  data() {
    return {
      count: 0
    };
  },
  methods: {
    add() {
      this.count = this.count + 1;
    }
  },
  mounted() {
    console.log('mounted');
  },
  setup(props) {
    const age = ref(18);
    const increate = function () {
      age.value++;
    };
    onMounted(() => {
      console.log('onMounted');
    });
    return { increate, age };
  }
};
</script>
