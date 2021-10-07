import { defineComponent, PropType } from 'vue';
import { FormItem } from 'ant-design-vue';
import Render from '@/components/Render';
import { antComponentType } from '@/types/config';

import './style.less';


export default defineComponent({
  components: {
    FormItem,
    Render
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
    console.log(this.item)
    return (
      <FormItem label={this.item.form.label}>
        <Render tag={this.item.tag} config={this.item.config}></Render>
      </FormItem>
    )
  }
});
