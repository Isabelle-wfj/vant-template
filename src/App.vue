<template>
  <pps-page>
    <router-view />
  </pps-page>
</template>
<script lang="ts">
import PpsPage from '@/components/base/page'
export default {
  components: {
    PpsPage
  }
}
</script>

<style>
#app {
  font-family: 'Helvetica Neue', Helvetica, 'PingFangSC-Regular', 'PingFang SC',
    'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #141414;
  font-size: 14px;
}
</style>
