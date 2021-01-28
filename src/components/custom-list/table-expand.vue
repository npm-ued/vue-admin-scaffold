<script lang="ts">
import { defineComponent, h, ref } from 'vue';
import { ElButton } from 'element-plus';
export default defineComponent({
  name: 'tableExpand',
  props: {
    row: {
      type: Object,
      default: () => {
        return {};
      }
    },
    render: {
      type: Function,
      require: true
    },
    index: Number,
    column: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  render(a: any, ctx: any) {
    const { row, column, index, render } = this.$props;
    let renderFn = render;
    if (!renderFn) {
      renderFn = (h: any, row: any) => {
        return '';
      };
    }
    // return renderFn(h, row);
    return h(ElButton, {});
  }
});
</script>
