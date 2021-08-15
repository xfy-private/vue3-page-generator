<template>
  <div>
    <a-row class="top">
      <a-col class="top-left" :span="20">
        <svg-icon name="form" :size="3"></svg-icon>
        <svg-icon name="form"></svg-icon>
        <svg-icon name="form"></svg-icon>
      </a-col>
      <a-col class="top-right" :span="4">col-12</a-col>
    </a-row>
    <a-row class="bottom">
      <a-col style="background-color: aqua;" :span="4">col-8</a-col>
      <a-col style="background-color: blueviolet;" :span="16">col-8</a-col>
      <a-col style="background-color: darksalmon;" :span="4">col-8</a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Index',
  setup() {
    return {};
  },
});
</script>

<style lang="less">
.top {
  height: 3rem;
  line-height: 3rem;

  .top-left {
    background-color: paleturquoise;
  }

  .top-right {
    background-color: tomato;
  }
}

.bottom {
  height: calc(100vh - 3rem);
}
</style>
