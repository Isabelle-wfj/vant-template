<template>
  <van-button
    class="base-button"
    v-bind="Config"
    v-on="mergeEventsAndDasherizeKeys(Config.on)"
  >
    {{ Config.text }}
  </van-button>
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'
import { Button } from 'vant'
import { mergeEventsAndDasherizeKeys } from '@/core/utils/factory/view.factory'
import { ButtonAdapter } from './BaseButton.adapter'
import { BUTTON_DEFAULT_CONFIG } from './BaseButton.default'
export default defineComponent({
  name: 'PpsButton',
  components: {
    [Button.name]: Button
  },
  props: {
    config: {
      type: Object as PropType<ButtonAdapter>
    }
  },
  setup(props) {
    const Config = computed(() => {
      return { ...BUTTON_DEFAULT_CONFIG, ...props.config }
    })
    return {
      Config,
      mergeEventsAndDasherizeKeys
    }
  }
})
</script>
<style lang="scss" scoped>
.base-button {
  .van-button--small {
    font-size: var(--van-font-size-md);
  }
}
</style>
