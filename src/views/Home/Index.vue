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
          <!--
          <svg-icon class="icon-title" name="input">输入型组件</svg-icon>
          <a-row wrap justify="space-between" :gutter="[0, 10]">
            <a-col class="components-item" :span="11">
              <svg-icon name="SingleInput">单行输入</svg-icon>
            </a-col>
            <a-col class="components-item" :span="11">
              <svg-icon name="MultiInput">多行输入</svg-icon>
            </a-col>
            <a-col class="components-item" :span="11">
              <svg-icon name="NumberInput">数字输入</svg-icon>
            </a-col>
            <a-col class="components-item" :span="11">
              <svg-icon name="password">密码输入</svg-icon>
            </a-col>
            <a-col class="components-item" :span="11">
              <svg-icon name="phone">手机输入</svg-icon>
            </a-col>
            <a-col class="components-item" :span="11">
              <svg-icon name="email">邮箱输入</svg-icon>
            </a-col>
            <a-col class="components-item" :span="11">
              <svg-icon name="RichText">富文编辑器</svg-icon>
            </a-col>
            <a-col class="components-item" :span="11">
              <svg-icon name="customize">自定义输入</svg-icon>
            </a-col>
          </a-row>

          <svg-icon class="icon-title" name="choose">选择型组件</svg-icon>
          <a-row wrap justify="space-between" :gutter="[0, 10]">
            <a-col class="components-item" :span="11">
              <svg-icon name="select">下拉选择</svg-icon>
            </a-col>
            <a-col class="components-item" :span="11">
              <svg-icon name="cascade">级联选择</svg-icon>
            </a-col>
            <a-col class="components-item" :span="11">
              <svg-icon name="TreeSelect">树型选择</svg-icon>
            </a-col>
            <a-col class="components-item" :span="11">
              <svg-icon name="radio">单选框组</svg-icon>
            </a-col>
            <a-col class="components-item" :span="11">
              <svg-icon name="checkbox">复选框组</svg-icon>
            </a-col>
            <a-col class="components-item" :span="11">
              <svg-icon name="switch">滑动开关</svg-icon>
            </a-col>
            <a-col class="components-item" :span="11">
              <svg-icon name="slider">滑动输入</svg-icon>
            </a-col>
            <a-col class="components-item" :span="11">
              <svg-icon name="date">日期选择</svg-icon>
            </a-col>
            <a-col class="components-item" :span="11">
              <svg-icon name="time">时间选择</svg-icon>
            </a-col>
            <a-col class="components-item" :span="11">
              <svg-icon name="DateScope">日期范围</svg-icon>
            </a-col>
            <a-col class="components-item" :span="11">
              <svg-icon name="TimeScope">时间范围</svg-icon>
            </a-col>
            <a-col class="components-item" :span="11">
              <svg-icon name="mentions">提及输入</svg-icon>
            </a-col>
            <a-col class="components-item" :span="11">
              <svg-icon name="rate">评分</svg-icon>
            </a-col>
            <a-col class="components-item" :span="11">
              <svg-icon name="upload">上传</svg-icon>
            </a-col>
          </a-row>

          <svg-icon class="icon-title" name="component">布局型组件</svg-icon>
          <a-row wrap justify="space-between" :gutter="[0, 10]">
            <a-col class="components-item" :span="11">
              <svg-icon name="row">行内布局</svg-icon>
            </a-col>
          </a-row>-->
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
          <div class="content"></div>
        </div>
      </div>
    </a-col>
    <a-col class="right" :xxl="4" :xl="4" :lg="5">
      <a-tabs>
        <a-tab-pane key="1" tab="组件属性">
          <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
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
        <a-tab-pane key="2" tab="表单属性"></a-tab-pane>
      </a-tabs>
    </a-col>
  </a-row>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import draggable from 'vuedraggable';

import { componentList } from '@/utils/data';

export default defineComponent({
  name: 'Home',
  components: {
    draggable,
  },
  setup() {
    const value1 = ref('1');
    const leftComponents = ref(componentList);
    return {
      labelCol: { span: 6 },
      wrapperCol: { span: 18 },
      value1,
      leftComponents,
    };
  },
});
</script>

<style lang="less">
@import url("style.less");
</style>
