<template>
  <div v-if="isExternal" :style="styleExternalIcon" class="svg-external-icon svg-icon">
    <slot></slot>
  </div>
  <span v-else style="display: flex; align-items: center; cursor: pointer;">
    <svg :class="svgClass" aria-hidden="true">
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
      type: Number,
      default: 1,
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
    return {
      isExternal,
      iconName,
      svgClass,
      styleExternalIcon,
      slots,
    };
  },
});
</script>

<style>
.svg-icon {
  width: v-bind(size + "rem");
  height: v-bind(size + "rem");
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
