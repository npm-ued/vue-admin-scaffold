<template>
  <div class="el-breadcrumb">
    <span
      class="el-breadcrumb__item"
      v-for="(item, index) in breadList"
      :key="`${index}-bread-crumb`"
    >
      <span
        @click="turnPage(item.path)"
        :class="['el-breadcrumb__inner', item.path ? 'is-link' : '']"
      >
        <i v-if="item.icon" :class="item.icon"></i>
        {{ $t(item.title) }}
      </span>
      <i
        v-if="separatorClass"
        class="el-breadcrumb__separator"
        :class="separatorClass"
      ></i>
      <span v-else class="el-breadcrumb__separator" role="presentation">{{
        separator
      }}</span>
    </span>
  </div>
</template>
<script lang="ts">
import { defineComponent, getCurrentInstance } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'breadcrumb',
  // props的属性在template里面也是直接使用的
  props: {
    separator: {
      type: String,
      default: '/'
    },
    separatorClass: {
      type: String,
      default: ''
    },
    // 面包屑list
    breadList: {
      type: Array,
      default: function () {
        return [];
      }
    }
  },
  setup() {
    // 获取router跳转对象
    const router = useRouter();
    const turnPage = (path: string): void => {
      if (path && router) {
        router.push({ path });
      }
    };
    return { turnPage };
  }
});
</script>
