<template>
  <cus-detail :config="detailConfig">
    <template #tip>
      <div class="detail-tips">
        <p class="pps-success pps-weight-bold">保单失效</p>
        <p class="pps-font-sm">保单价值</p>
        <p class="detail-number">60000.00</p>
        <p class="pps-font-sm">更新日期：2020-09-09</p>
      </div>
    </template>
  </cus-detail>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { PpsCusDetailConfig } from './CusDetail.config'
import CusDetail from '@/components/customize/detail'
export default defineComponent({
  components: { CusDetail },
  setup() {
    const detailConfig = PpsCusDetailConfig()
    return {
      detailConfig
    }
  }
})
</script>
<style lang="scss" scoped>
.detail-tips {
  text-align: right;
  color: var(--van-gray-7);
  p:not(:last-child) {
    margin-bottom: 10px;
  }
  .detail-number {
    font-size: 22px;
    line-height: 24px;
    color: var(--van-gray-8);
  }
}
</style>
