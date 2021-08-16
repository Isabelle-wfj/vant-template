<template>
  <base-cell
    class="view-base"
    :showImg="false"
    title="张森严"
    sub="不展示图片"
  ></base-cell>
  <base-cell
    class="view-base"
    imgUrl="https://img.yzcdn.cn/vant/cat.jpeg"
    title="张森严"
    sub="完整表现"
    tag="隐私客户"
    rightText="右边内容"
    :showArrow="true"
    @right-click="rightClick"
    @click="allClick"
  ></base-cell>
  <base-cell
    class="view-base"
    imgUrl="https://img.yzcdn.cn/vant/cat.jpeg"
    title=""
    sub="无主标题"
    tag="隐私客户"
  ></base-cell>
  <base-cell
    class="view-base"
    imgUrl="https://img.yzcdn.cn/vant/cat.jpeg"
    title="张森严"
    sub="没有tag"
  ></base-cell>
  <base-cell
    class="view-base"
    imgUrl=""
    title="张森严"
    sub="名字作为图片"
  ></base-cell>
  <base-cell
    class="view-base"
    imgUrl=""
    title="Jason Boker"
    sub="英文名取首字母"
  ></base-cell>
  <base-cell
    class="view-base"
    imgUrl=""
    title="Jasonbbeee"
    sub="单英文取前两位"
  ></base-cell>
  <base-cell
    class="view-base"
    imgUrl=""
    title="Jasonbbeee"
    :showDefaultImg="true"
    sub="取默认图片"
  ></base-cell>
  <base-cell
    class="view-base"
    imgUrl=""
    title="Jasonbbeee"
    sub="自定义默认图片"
  >
    <template #loadingSlot>
      <van-image
        :src="$src + '/qnw/wxapp/common/images/camera.png'"
      ></van-image>
    </template>
  </base-cell>
</template>

<script lang="ts">
import { Icon, Toast, Image } from 'vant'
import BaseCell from '@/components/base/cell/src/BaseCell.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    BaseCell,
    [Icon.name]: Icon,
    [Toast.name]: Toast,
    [Image.name]: Image
  },
  methods: {
    rightClick() {
      Toast('我被单击了')
      console.log('right')
    },
    allClick() {
      Toast('全局被单击了')
      console.log('all')
    }
  }
})
</script>
