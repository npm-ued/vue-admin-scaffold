<template>
  <div>
    <h1>custom List</h1>
  </div>
</template>
<script>
export default {
  name: 'CustomList',
  props: {
    listUrl: {
      // 列表ajax url
      type: String
    }
  },
  setup(props) {
    return {};
  }
};
</script>
