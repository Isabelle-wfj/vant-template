<template>
  <div class="view-base">
    <base-form-detail :config="formConfig">
      <template #label></template>
    </base-form-detail>
  </div>
</template>

<script lang="ts">
import BaseFormDetail from '@/components/base/form-detail/src/BaseFormDetail.vue'
import { defineComponent } from 'vue'
import { PpsBaseFormDetailConfig } from './BaseFormDetail.config'
export default defineComponent({
  components: { BaseFormDetail },
  emits: [],
  setup() {
    const { formConfig } = PpsBaseFormDetailConfig()
    return {
      formConfig
    }
  }
})
</script>
