<!--
  @author：longzinziyan@gmail.com
  @desc：单个拖拽节点
  @date：2021-08-19 22:09:49
-->
<script lang="tsx">

import { defineComponent, h, PropType } from 'vue';
import draggable from 'vuedraggable';
import Render from '@/components/Render';
import { antComponentType } from '@/types/config';

export default defineComponent({
  components: {
    draggable,
    Render,
  },
  props: {
    item: {
      type: Object as PropType<antComponentType & {
        config: {
          [key: string]: string
        }
      }>,
      required: true,
    },
  },
  render() {
    return (
      <div></div>
    )
  }
});

</script>

<style lang="less">
@import url(style.less);
</style>
