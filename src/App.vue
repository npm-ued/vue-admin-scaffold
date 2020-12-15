<template>
  <div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'App'
});
</script>
<style>
body {
  background-color: #f5f7f9;
}
</style>
