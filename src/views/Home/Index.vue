<template>
  <a-row class="main">
    <a-col class="left" :xxl="4" :xl="5" :lg="6">
      <a-tabs>
        <a-tab-pane key="1" tab="Ant Design Vue">
          <template v-for="(item, index) in leftComponents" :key="index">
            <svg-icon class="icon-title" :name="item.icon">{{ item.title }}</svg-icon>
            <draggable
              class="ant-row ant-row-space-between components-draggable"
              v-model="item.componentList"
              handle=".component-item"
              :sort="false"
              item-key="id"
              :component-data="{ name: 'fade' }"
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
          <div class="content">
            <a-row></a-row>
          </div>
        </div>
      </div>
    </a-col>
    <a-col class="right" :xxl="4" :xl="4" :lg="5">
      <RightPanel />
    </a-col>
  </a-row>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent, ref } from 'vue';
import draggable from 'vuedraggable';

import { componentList } from '@/utils/data';

export default defineComponent({
  name: 'Home',
  components: {
    draggable,
    RightPanel: defineAsyncComponent(() => import('@/components/RightPanel')),
  },
  setup() {
    const leftComponents = ref(componentList);
    return {
      leftComponents,
    };
  },
});
</script>

<style lang="less">
@import url("style.less");
</style>
