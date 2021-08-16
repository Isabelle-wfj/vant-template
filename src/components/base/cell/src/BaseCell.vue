<template>
  <div class="base-cell">
    <div class="base-cell-left">
      <van-image
        class="cell-left-img"
        :src="imgUrl"
        :round="round"
        v-if="showImg"
      >
        <template v-slot:loading v-if="!showDefaultImg">
          <slot name="loadingSlot">
            {{ avatar }}
          </slot>
        </template>
        <template v-slot:error v-if="!showDefaultImg">
          <slot name="errorSlot">
            {{ avatar }}
          </slot>
        </template>
      </van-image>
      <div class="cell-left-info">
        <p class="pps-main-font">
          <slot name="main"></slot>
          {{ title }}
          <span
            class="info-tag pps-font-sm pps-weight-light"
            :style="!title ? 'margin-left: 0' : ''"
            v-if="tag"
          >
            {{ tag }}
          </span>
        </p>
        <p class="pps-sub-font" v-if="sub">
          <slot name="sub">
            {{ sub }}
          </slot>
        </p>
      </div>
    </div>
    <div class="base-cell-right">
      <slot name="right">
        {{ rightText }}
      </slot>
    </div>
    <div
      class="base-cell-arrow"
      v-if="showArrow"
      @click.prevent.stop="rightClick"
    >
      <slot name="arrow">
        <van-icon name="arrow" />
      </slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Image as VanImage, Icon } from 'vant'
export default defineComponent({
  name: 'PpsCell',
  components: {
    [VanImage.name]: VanImage,
    [Icon.name]: Icon
  },
  props: {
    showDefaultImg: {
      type: Boolean,
      default: false
    },
    showImg: {
      type: Boolean,
      default: true
    },
    imgUrl: {
      type: String as PropType<undefined | string>,
      default: ''
    },
    title: {
      type: [String, Number] as PropType<string | undefined | number | null>,
      default: ''
    },
    sub: {
      type: [String, Number] as PropType<string | undefined | number | null>,
      default: ''
    },
    tag: {
      type: [String, Number] as PropType<string | undefined | number | null>,
      default: ''
    },
    rightText: {
      type: String,
      default: ''
    },
    showArrow: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: true
    }
  },
  emits: ['right-click'],
  computed: {
    avatar() {
      if (this.showDefaultImg) {
        return ''
      }
      const reg = /^[a-zA-Z ]+$/
      let res = ''
      if (this.title && reg.test(String(this.title))) {
        const arr = String(this.title).trim().split(' ')
        res =
          arr.length == 1
            ? arr[0].substr(0, 2).charAt(0).toUpperCase() +
              arr[0].substr(0, 2).slice(1)
            : arr
                .reduce(
                  (prev, curr) => prev.substr(0, 1) + '' + curr.substr(0, 1)
                )
                .toUpperCase()
      } else {
        res = String(this.title).slice(-2)
      }
      return res
    }
  },
  setup(props, ctx) {
    const rightClick = value => {
      ctx.emit('right-click', value)
    }
    return {
      rightClick
    }
  }
})
</script>
<style lang="scss" scoped>
.base-cell {
  @include layout(row, nowrap, center, center);
  align-items: inherit;
  &-left {
    flex-shrink: 0;
    @include layout(row, nowrap, center, start);
    margin-right: 20px;
    .cell-left-img {
      width: 64px;
      height: 64px;
      margin-right: 12px;
      border: 1px solid var(--van-border-color);
      background: var(--van-background-color-light);
      ::deep .van-image__error,
      ::deep .van-image__loading {
        color: var(--van-text-color);
        font-size: var(--van-line-height-lg);
        font-weight: var(--van-font-weight-bold);
      }
    }
    .cell-left-info {
      .pps-main-font {
        @include layout(row, nowrap, center, start);
        .info-tag {
          padding: 0 3px;
          margin-left: 6px;
          border-radius: 1px;
          border: 1px solid var(--van-text-color);
        }
      }
      .pps-sub-font {
        margin-top: 6px;
        text-align: left;
      }
    }
  }
  &-right {
    flex: 1;
    @include layout(row, nowrap, center, end);
  }
  &-arrow {
    min-width: 24px;
    flex-shrink: 0;
    @include layout(row, nowrap, center, end);
  }
}
</style>
