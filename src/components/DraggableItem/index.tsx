/**
 * @author：longzinziyan@gmail.com
 * @desc：单个拖拽组件
 * @date：2021-08-17 22:37:04
 */

import { defineComponent, h, PropType } from 'vue';
import draggable from 'vuedraggable';
import Render from '@/components/Render';
import { componentItemType } from '@/types/config';

export default defineComponent({
  components: {
    draggable,
    Render,
  },
  props: {
    item: {
      type: Object as PropType<componentItemType>,
      required: true,
    },
  },
  render() {
    return <h3></h3>
  },
});
