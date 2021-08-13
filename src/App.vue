<template>
  <base-page>
    <router-view />
  </base-page>
</template>
<script lang="ts">
import BasePage from '@/components/base/page'
export default {
  components: {
    BasePage
  }
}
</script>

<style>
#app {
  font-family: 'Helvetica Neue', Helvetica, 'PingFangSC-Regular', 'PingFang SC',
    'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--van-gray-8);
  font-size: var(--van-font-size-md);
  font-weight: var(--van-font-weight-normal);
}
</style>
