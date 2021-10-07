/**
 * @author：longzinziyan@gmail.com
 * @desc：组件渲染器
 * @date：2021-08-19 18:37:04
 */

import { defineComponent, createVNode, PropType, resolveComponent } from 'vue';

import { antTagType } from '@/types/config';

export default defineComponent({
  name: 'Render',
  props: {
    tag: {
      type: String as PropType<antTagType>,
      required: true,
    },
    config: {
      type: Object as PropType<{
        [key: string]: unknown
      }>,
      required: true,
    },
  },
  render() {
    return createVNode(resolveComponent(this.tag), {
      ...this.config
    })
  },
});
