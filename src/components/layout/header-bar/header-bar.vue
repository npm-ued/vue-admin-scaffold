<template>
  <el-header>
    <a @click="handleChange" :class="collapsed ? 'collapsed' : ''">
      <i class="el-icon-s-fold collapseIcon" :size="40" />
    </a>
    <div class="custom-bread-crumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </el-header>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'headerBar',
  data() {
    return { collapsed: false };
  },
  methods: {
    // 菜单伸缩
    handleChange() {
      this.collapsed = !this.collapsed;
      this.$emit('on-change', this.collapsed);
    }
  },
  setup(props) {
    return {};
  }
});
</script>
<style>
.collapseIcon {
  font-size: 25px;
  cursor: pointer;
  transition: transform 0.3s, transform 0.3s;
}
.collapsed i {
  transform: rotateZ(-90deg);
}
.custom-bread-crumb {
  display: inline-block;
  vertical-align: top;
  margin-left: 10px;
}
</style>
