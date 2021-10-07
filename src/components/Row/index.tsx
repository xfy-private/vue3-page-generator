import { defineComponent, PropType, h } from 'vue';
import { Row } from 'ant-design-vue';

export default defineComponent({
  props: {
    gutter: {
      type: Object as PropType<[number, number]>,
      required: true,
    },
    layout: {
      type: String as PropType<'horizontal' | 'vertical' | 'inline'>,
      required: true,
    },
  },
  render() {
    if (this.layout === 'inline') {
      return h(Row, {
        gutter: this.gutter,
        class: 'content',
      }, this.$slots.default && this.$slots.default());
    }
    return h('div', {
      class: 'content',
    }, this.$slots.default && this.$slots.default());
  },
});
