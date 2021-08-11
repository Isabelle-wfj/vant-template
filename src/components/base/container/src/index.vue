<template>
  <van-config-provider :theme-vars="themeVars">
    <slot></slot>
  </van-config-provider>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { ConfigProvider } from 'vant'
import { GetSkin } from '../../../../core/styles/skin'
export default defineComponent({
  name: 'PpsBasePage',
  components: {
    [ConfigProvider.name]: ConfigProvider
  },
  setup() {
    return {
      ...GetSkin()
    }
  }
})
</script>
