/**
 * @author：longzinziyan@gmail.com
 * @desc：组件渲染器
 * @date：2021-08-19 18:37:04
 */

import { defineComponent, h, PropType } from 'vue';

export default defineComponent({
  props: {
    conf: {
      type: Object as PropType<{
        [key: string]: unknown
      }>,
      required: true,
    },
  },
  render() {
    console.log(this.conf.tag);
    return h(this.conf.tag as string);
  },
});
