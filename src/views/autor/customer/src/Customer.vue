<template>
  <pps-layout class="customer"> PpsCustomer Working! </pps-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { PpsCustomerConfig } from './Customer.config'
export default defineComponent({
  setup() {
    return {
      ...PpsCustomerConfig()
    }
  }
})
</script>
