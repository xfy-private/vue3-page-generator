<template>
  <div v-if="isExternal" :style="styleExternalIcon" class="svg-external-icon svg-icon"></div>
  <svg v-else :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
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
  setup(props) {
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
  cursor: pointer;
}

.svg-external-icon {
  display: inline-block;
  background-color: currentColor;
  mask-size: cover !important;
}
</style>
