<!--
  @author：longzinziyan@gmail.com
  @desc：右边表单与控件属性面板
  @date：2021-08-17 22:10:31
-->
<template>
  <a-tabs defaultActiveKey="2">
    <a-tab-pane key="1" tab="组件属性">
      <a-form :labelCol="labelCol" :wrapperCol="wrapperCol">
        {{ activeData }}
        <!-- <a-form-item label="标题">
          <a-input v-model:value="activeDataConfig.form.label" />
        </a-form-item>
        <a-form-item label="字段">
          <a-input v-model:value="activeDataConfig.config.vModel" />
        </a-form-item>-->
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
        <a-form-item label="标签对齐">
          <a-radio-group v-model:value="formConfig.labelAlign" button-style="solid">
            <a-radio-button value="left">左对齐</a-radio-button>
            <a-radio-button value="right">右对齐</a-radio-button>
          </a-radio-group>
        </a-form-item>
        <a-form-item label="表单布局">
          <a-radio-group v-model:value="formConfig.layout" button-style="solid">
            <a-radio-button value="horizontal">水平</a-radio-button>
            <a-radio-button value="vertical">垂直</a-radio-button>
            <a-radio-button value="inline">排列</a-radio-button>
          </a-radio-group>
        </a-form-item>
        <a-form-item label="校验规则">
          <a-radio-group v-model:value="formConfig.validateTrigger" button-style="solid">
            <a-radio-button value="blur">blur</a-radio-button>
            <a-radio-button value="change">change</a-radio-button>
            <a-radio-button value="['blur', 'change']">共同</a-radio-button>
          </a-radio-group>
        </a-form-item>
        <a-form-item label="标签布局">
          <a-input-group compact>
            <a-select style="width: 65%;" v-model:value="labelColSelect">
              <a-select-option value="span">栅格占位格数</a-select-option>
              <a-select-option value="offset">栅格左侧间隔</a-select-option>
            </a-select>
            <a-input-number
              style="width: 35%;"
              v-model:value="formConfig.labelCol[labelColSelect]"
              :min="0"
              :max="24"
            ></a-input-number>
          </a-input-group>
        </a-form-item>
        <a-form-item label="输入布局">
          <a-input-group compact>
            <a-select style="width: 65%;" v-model:value="wrapperColSelect">
              <a-select-option value="span">栅格占位格数</a-select-option>
              <a-select-option value="offset">栅格左侧间隔</a-select-option>
            </a-select>
            <a-input-number
              style="width: 35%;"
              v-model:value="formConfig.wrapperCol[wrapperColSelect]"
              :min="0"
              :max="24"
            ></a-input-number>
          </a-input-group>
        </a-form-item>
        <a-form-item label="栅格间隔" v-if="formConfig.layout === 'inline'">
          <a-input-group compact>
            <a-select style="width: 65%;" v-model:value="gutterSelect">
              <a-select-option :value="0">水平间距</a-select-option>
              <a-select-option :value="1">垂直间距</a-select-option>
            </a-select>
            <a-input-number
              style="width: 35%;"
              v-model:value="formConfig.gutter[gutterSelect]"
              :min="0"
            ></a-input-number>
          </a-input-group>
        </a-form-item>
        <a-form-item label="全部必填">
          <a-switch v-model:checked="formConfig.hideRequiredMark" />
        </a-form-item>
        <a-form-item label="显示冒号">
          <a-switch v-model:checked="formConfig.colon" />
        </a-form-item>
        <a-form-item label="触发校验">
          <a-switch v-model:checked="formConfig.validateOnRuleChange" />
        </a-form-item>
        <a-form-item label="禁用表单">
          <a-switch v-model:checked="formConfig.disabled" />
        </a-form-item>
      </a-form>
    </a-tab-pane>
  </a-tabs>
</template>

<script lang="ts">
import {
  defineComponent, ref, PropType, watch,
} from 'vue';

import { antFormType, antComponentType } from '@/types/config';

export default defineComponent({
  name: 'RightPanel',
  props: {
    form: {
      type: Object as PropType<antFormType>,
      required: true,
    },
    activeData: {
      type: Object as PropType<antComponentType>,
      required: true,
    },
  },
  setup(props) {
    console.log(props.activeData);
    const formConfig = ref(props.form);
    // const activeDataConfig = ref(props.activeData);
    const labelColSelect = ref<'span' | 'offset'>('span');
    const wrapperColSelect = ref<'span' | 'offset'>('span');
    const gutterSelect = ref<0 | 1>(0);
    watch(() => props.activeData, (newVal) => {
      console.log('-----------', newVal);
    });
    return {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
      formConfig,
      labelColSelect,
      wrapperColSelect,
      gutterSelect,
      // activeDataConfig,
    };
  },
});
</script>

<style lang="less">
@import url(style.less);
</style>
