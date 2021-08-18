<template>
  <a-tabs>
    <a-tab-pane key="1" tab="组件属性">
      <a-form :labelCol="labelCol" :wrapperCol="wrapperCol">
        <a-form-item label="标题">
          <a-input />
        </a-form-item>
        <a-form-item label="组件类型">
          <a-select v-model:value="value1">
            <a-select-option value="1">单行输入</a-select-option>
            <a-select-option value="2">多行输入</a-select-option>
          </a-select>
        </a-form-item>
      </a-form>
    </a-tab-pane>
    <a-tab-pane key="2" tab="表单属性">
      <a-form :labelCol="labelCol" :wrapperCol="wrapperCol" :model="form">
        <a-form-item label="表单名">
          <a-input v-model:value="form.name" />
        </a-form-item>
        <a-form-item label="表单模型">
          <a-input v-model:value="form.model" />
        </a-form-item>
        <a-form-item label="校验模型">
          <a-input v-model:value="form.rules" />
        </a-form-item>
      </a-form>
    </a-tab-pane>
  </a-tabs>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue';

import { formType } from '@/types/data';

export default defineComponent({
  name: 'RightPanel',
  props: {
    form: {
      type: Object as PropType<formType>,
      required: true,
    },
  },
  setup(props) {
    const value1 = ref('1');
    return {
      ...props,
      labelCol: { span: 6 },
      wrapperCol: { span: 18 },
      value1,
    };
  },
});
</script>

<style lang="less">
@import url(style.less);
</style>
