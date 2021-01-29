<script lang="ts">
import { defineComponent, h } from 'vue';
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
    return renderFn(h, row);
  }
});
</script>
