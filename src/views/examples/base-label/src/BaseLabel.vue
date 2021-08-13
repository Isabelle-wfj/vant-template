<template>
  <base-label
    class="view-base"
    label="默认"
    weight="light"
    value="14px,normal,left"
  ></base-label>
  <base-label
    class="view-base"
    label="自定义"
    labelSize="lg"
    labelWeight="bold"
    align="center"
    value="size,align,weight均可自定义"
  ></base-label>
  <base-label
    class="view-base"
    label="自定义"
    labelSize="sm"
    labelWeight="light"
    size="lg"
    weight="bold"
    align="right"
    value="size,align,weight均可自定义"
  ></base-label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseLabel from '@/components/base/label/src/BaseLabel.vue'

export default defineComponent({
  components: { BaseLabel }
})
</script>
<style lang="scss" scoped>
.view-base {
  max-width: 400px;
}
</style>
