<template>
  <a-tabs>
    <a-tab-pane key="1" tab="组件属性">
      <a-form :labelCol="labelCol" :wrapperCol="wrapperCol">
        <a-form-item label="标题">
          <a-input />
        </a-form-item>
        <a-form-item label="组件类型">
          <a-select>
            <a-select-option value="1">单行输入</a-select-option>
            <a-select-option value="2">多行输入</a-select-option>
          </a-select>
        </a-form-item>
      </a-form>
    </a-tab-pane>
    <a-tab-pane key="2" tab="表单属性">
      <a-form :labelCol="labelCol" :wrapperCol="wrapperCol" :model="form">
        <a-form-item label="表单名">
          <a-input v-model:value="formConfig.name" />
        </a-form-item>
        <a-form-item label="表单模型">
          <a-input v-model:value="formConfig.model" />
        </a-form-item>
        <a-form-item label="校验模型">
          <a-input v-model:value="formConfig.rules" />
        </a-form-item>
      </a-form>
    </a-tab-pane>
  </a-tabs>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue';

import { antFormType } from '@/types/config';

export default defineComponent({
  name: 'RightPanel',
  props: {
    form: {
      type: Object as PropType<antFormType>,
      required: true,
    },
  },
  setup(props) {
    const formConfig = ref(props.form);
    return {
      labelCol: { span: 6 },
      wrapperCol: { span: 18 },
      formConfig,
    };
  },
});
</script>

<style lang="less">
@import url(style.less);
</style>
