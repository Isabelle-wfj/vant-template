<template>
  <div class="base-label">
    <p
      class="base-label-key"
      :class="{
        'pps-font-sm': labelSize == 'sm',
        'pps-font-md': labelSize == 'md',
        'pps-font-lg': labelSize == 'lg',
        'pps-font-xl': labelSize == 'xl',
        'pps-font-xxl': labelSize == 'xxl',
        'pps-weight-light': labelWeight == 'light',
        'pps-weight-bold': labelWeight == 'bold',
        'pps-align-left': align == 'left',
        'pps-align-center': align == 'center',
        'pps-align-right': align == 'right'
      }"
    >
      <slot name="label">{{ label }}</slot>
    </p>
    <p
      :class="{
        'pps-font-sm': size == 'sm',
        'pps-font-md': size == 'md',
        'pps-font-lg': size == 'lg',
        'pps-font-xl': size == 'xl',
        'pps-font-xxl': size == 'xxl',
        'pps-weight-light': weight == 'light',
        'pps-weight-bold': weight == 'bold',
        'pps-align-left': align == 'left',
        'pps-align-center': align == 'center',
        'pps-align-right': align == 'right'
      }"
    >
      <slot name="value">{{ value }}</slot>
    </p>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
type Size = 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
type Weight = 'light' | 'normal' | 'bold'
type Align = 'left' | 'center' | 'right'
export default defineComponent({
  name: 'PpsLabel',
  props: {
    label: {
      type: [Number, String],
      default: ''
    },
    value: {
      type: [Number, String],
      default: ''
    },
    labelSize: {
      type: String as PropType<Size>,
      default: 'md'
    },
    labelWeight: {
      type: String as PropType<Weight>,
      default: 'bold'
    },
    labelAlign: {
      type: String as PropType<Align>,
      default: 'left'
    },
    size: {
      type: String as PropType<Size>,
      default: 'sm'
    },
    weight: {
      type: String as PropType<Weight>,
      default: 'light'
    },
    align: {
      type: String as PropType<Align>,
      default: 'left'
    }
  }
})
</script>
<style lang="scss" scoped>
.base-label {
  &-key {
    margin-bottom: 3px;
  }
}
</style>
