<template>
  <div class="el-breadcrumb">
    <span
      class="el-breadcrumb__item"
      v-for="(item, index) in list"
      :key="`${index}-bread-crumb`"
    >
      <span
        ref="link"
        :class="['el-breadcrumb__inner', item.to ? 'is-link' : '']"
      >
        {{ item.name }}
      </span>
      <!-- <i
        v-if="props.separatorClass"
        class="el-breadcrumb__separator"
        :class="props.separatorClass"
      ></i>
      <span v-else class="el-breadcrumb__separator" role="presentation">{{
        props.separator
      }}</span> -->
    </span>
  </div>
</template>
<script lang="ts">
import { Breadcrumb } from './header-bar';
import { defineComponent, ref } from 'vue';

interface BreadcrumbProps {
  separator: string;
  separatorClass: string;
  breadList: Breadcrumb[];
}

interface BreadcrumbItemProps {
  to: string | Record<string, unknown>;
  replace: boolean;
}

export default defineComponent({
  name: 'breadcrumb',
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
      type: [],
      default: function () {
        return [];
      }
    }
  },
  setup(props: BreadcrumbProps) {
    // eslint-disable-next-line vue/no-setup-props-destructure
    const list: Breadcrumb[] = props.breadList;
    console.log(list);

    // const { separator } = props;
    return { list };
  }
});
</script>
