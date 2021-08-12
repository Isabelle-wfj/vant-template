<template>
  <div class="login">PpsLogin Working!</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { PpsLoginConfig } from './Login.config'
export default defineComponent({
  setup() {
    return {
      ...PpsLoginConfig()
    }
  }
})
</script>
