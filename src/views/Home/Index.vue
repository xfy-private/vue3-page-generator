<!--
  @author：longzinziyan@gmail.com
  @desc：首页
  @date：2021-08-09 22:15:17
-->
<template>
  <a-row class="main">
    <a-col class="left" :xxl="4" :xl="5" :lg="6">
      <a-tabs>
        <a-tab-pane key="1" tab="Ant Design Vue">
          <template v-for="(item) in leftComponents" :key="item">
            <svg-icon class="icon-title" :name="item.icon">{{ item.title }}</svg-icon>
            <draggable
              class="ant-row ant-row-space-between components-draggable"
              v-model="item.componentList"
              handle=".component-item"
              :group="{ name: 'componentsGroup', pull: 'clone', put: false }"
              :sort="false"
              itemKey="id"
              :componentData="{ name: 'fade' }"
              :clone="clone"
              @end="end"
            >
              <template #item="{ element }">
                <a-col class="component-item" :span="11">
                  <svg-icon :name="element.icon">{{ element.title }}</svg-icon>
                </a-col>
              </template>
            </draggable>
          </template>
        </a-tab-pane>
        <a-tab-pane key="2" tab="Element Plus"></a-tab-pane>
      </a-tabs>
    </a-col>
    <a-col class="center" :xxl="16" :xl="15" :lg="13">
      <div class="center-top">
        <a-space :size="8">
          <svg-icon name="form" size="2" class="pointer" />
          <span class="title">Vue3 Page Generator</span>
          <svg-icon name="github" size="1.3" class="pointer" />
        </a-space>
        <a-space :size="15">
          <svg-icon name="debug" size="1.2" class="pointer">调试</svg-icon>
          <svg-icon name="eye" size="1.5" class="pointer">查看</svg-icon>
          <svg-icon name="download" size="1.3" class="pointer">下载</svg-icon>
          <svg-icon name="copy" size="1.3" class="pointer">复制</svg-icon>
          <svg-icon name="table" size="1.1" class="pointer">表格</svg-icon>
          <svg-icon style="color: red;" name="reset" size="1.2" class="pointer">重置</svg-icon>
        </a-space>
      </div>
      <div class="center-bottom">
        <div class="window">
          <svg-icon name="forward" class="turn" size="1.6" />
          <Row :gutter="formConfig.gutter" :layout="formConfig.layout">
            <a-form
              :hideRequiredMark="formConfig.hideRequiredMark"
              :labelAlign="formConfig.labelAlign"
              :layout="formConfig.layout"
              :labelCol="formConfig.labelCol"
              :wrapperCol="formConfig.wrapperCol"
              :colon="formConfig.colon"
              :validateOnRuleChange="formConfig.validateOnRuleChange"
              :scrollToFirstError="formConfig.scrollToFirstError"
              :name="formConfig.name"
              :validateTrigger="formConfig.validateTrigger"
            >
              <draggable
                class="drawing-components"
                v-model="drawingComponentList"
                :animation="340"
                group="componentsGroup"
                itemKey="id"
              >
                <template #item="{ element }">
                  <DraggableItem :item="element"></DraggableItem>
                </template>
              </draggable>
              <div v-show="!drawingComponentList.length" class="empty-info">从左侧拖入或点选组件进行表单设计</div>
            </a-form>
          </Row>
        </div>
      </div>
    </a-col>
    <a-col class="right" :xxl="4" :xl="4" :lg="5">
      <RightPanel :form="formConfig" :activeData="activeData" />
    </a-col>
  </a-row>
</template>

<script lang="ts">
import {
  defineAsyncComponent, defineComponent, ref, watch,
} from 'vue';
import { debounce } from 'throttle-debounce';
import draggable from 'vuedraggable';

import { componentList, antForm } from '@/utils/config';
import { antComponentType, antTagType } from '@/types/config';
import { getFormId, saveFormId } from '@/utils/data';

export default defineComponent({
  name: 'Home',
  components: {
    draggable,
    RightPanel: defineAsyncComponent(() => import('@/components/RightPanel')),
    Row: defineAsyncComponent(() => import('@/components/Row')),
    DraggableItem: defineAsyncComponent(() => import('@/components/DraggableItem')),
  },
  setup() {
    const leftComponents = ref(componentList);
    const drawingComponentList = ref([]);
    const formConfig = ref(antForm);
    const formId = ref(getFormId());
    const saveFormIdDebounce = debounce(200, saveFormId);
    const activeData = ref<antComponentType>({});

    watch(formId, (newVal: number) => {
      saveFormIdDebounce(newVal);
    }, {
      immediate: true,
    });

    function clone(origin: antComponentType) {
      const tag = ref<antTagType>(origin.tag);
      const config = ref(origin.config);
      const form = ref(origin.form);
      const slots = ref(origin.slots);
      if (origin.form.layout === 'col') {
        formId.value += formId.value;
        config.value.vModel = `field${formId.value}`;
      }
      activeData.value = {
        tag,
        config,
        form,
        slots,
      } as unknown as antComponentType;
      console.log('===========================');
      return activeData.value;
    }
    function end(obj: {
      from: string,
      to: string
    }) {
      if (obj.from !== obj.to) {
        console.log(obj);
      }
    }
    return {
      leftComponents,
      drawingComponentList,
      formConfig,
      activeData,
      clone,
      end,
    };
  },
});
</script>

<style lang="less">
@import url("style.less");
</style>
