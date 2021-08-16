<template>
  <div v-if="isExternal" :style="styleExternalIcon" class="svg-external-icon svg-icon">
    <slot></slot>
  </div>
  <span v-else style="display: flex; align-items: center;">
    <svg :class="svgClass" aria-hidden="true" :style="{ width: sizeCss, height: sizeCss }">
      <use :xlink:href="iconName" />
    </svg>
    <span v-if="slots.default" style="margin-left: 0.3rem;">
      <slot></slot>
    </span>
  </span>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'SvgIcon',
  props: {
    name: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: '1',
    },
  },
  setup(props, { slots }) {
    const isExternal = computed(() => /^(https?:|mailto:|tel:)/.test(props.name));
    const iconName = computed(() => `#icon-${props.name}`);
    const svgClass = computed(() => {
      if (props.className) {
        return `svg-icon ${props.className}`;
      }
      return 'svg-icon';
    });
    const styleExternalIcon = computed(() => ({
      mask: `url(${props.name}) no-repeat 50% 50%`,
      '-webkit-mask': `url(${props.name}) no-repeat 50% 50%`,
    }));
    const sizeCss = computed(() => `${props.size}rem`);
    return {
      isExternal,
      iconName,
      svgClass,
      styleExternalIcon,
      slots,
      sizeCss,
    };
  },
});
</script>

<style lang="less">
.svg-icon {
  overflow: hidden;
  vertical-align: -0.15rem;
  fill: currentColor;
}

.svg-external-icon {
  display: inline-block;
  background-color: currentColor;
  mask-size: cover !important;
}
</style>
