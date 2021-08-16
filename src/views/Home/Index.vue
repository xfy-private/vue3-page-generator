<template>
  <div>
    <a-row class="top">
      <a-col class="top-left" :span="3">
        <a-tabs>
          <a-tab-pane key="1" tab="表单设计" />
          <a-tab-pane key="2" tab="表格设计" />
        </a-tabs>
      </a-col>
      <a-col class="top-center" :span="18">
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
          <svg-icon style="color: red;" name="reset" size="1.2" class="pointer">重置</svg-icon>
        </a-space>
      </a-col>
      <a-col class="top-right" :span="3">
        <a-tabs>
          <a-tab-pane key="1" tab="组件属性" />
          <a-tab-pane key="2" tab="表单属性" />
        </a-tabs>
      </a-col>
    </a-row>
    <a-row class="bottom">
      <a-col class="bottom-left" :span="3">
        <svg-icon class="icon-title" name="input">输入型组件</svg-icon>
        <a-row wrap justify="space-between" :gutter="[0, 10]">
          <a-col class="components-item" :span="11">
            <svg-icon name="SingleInput" size="1.5">单行输入</svg-icon>
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
            <svg-icon name="select" size="1.5">下拉选择</svg-icon>
          </a-col>
          <a-col class="components-item" :span="11">
            <svg-icon name="cascade" size="1.5">级联选择</svg-icon>
          </a-col>
        </a-row>
      </a-col>
      <a-col class="bottom-center" :span="18">
        <div class="window">
          <div class="content"></div>
        </div>
      </a-col>
      <a-col class="bottom-right" :span="3">
        <a-row>
          <a-col :span="12">col-12</a-col>
          <a-col :span="12">col-12</a-col>
        </a-row>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Home',
  setup() {
    const generatorModel = ref();

    return {
      generatorModel,
    };
  },
});
</script>

<style lang="less">
@import url("style.less");
</style>
