<template>
  <van-form class="base-form-detail" v-bind="Config">
    <h3 class="pps-font-md pps-weight-bold" v-if="Config.title">
      {{ Config.title }}
    </h3>
    <div class="form-detail">
      <van-cell-group
        :border="false"
        v-for="(form, i) in Config.form"
        :key="i"
        :class="[form.className, { 'form-detail-box': Config.form.length > 1 }]"
      >
        <van-field
          v-for="(field, fi) in form.fieldConfig"
          :key="fi"
          readonly
          rows="1"
          :border="false"
          v-model="Config.formModel[field.name]"
          v-bind="field"
          :type="field.type || 'textarea'"
          :autosize="true"
        >
          <template v-for="(name, slot) in field?.slots || {}" #[slot]>
            <slot :name="name"></slot>
          </template>
        </van-field>
      </van-cell-group>
    </div>
  </van-form>
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'
import { Field, CellGroup, Form } from 'vant'
import { FormDetailAdapter } from './BaseFormDetail.adapter'
import { FORM_DETAIL_DEFAULT_CONFIG } from './BaseFormDetail.default'
export default defineComponent({
  name: 'PpsFormDetail',
  components: {
    [Field.name]: Field,
    [CellGroup.name]: CellGroup,
    [Form.name]: Form
  },
  props: {
    config: {
      type: Object as PropType<FormDetailAdapter>
    }
  },
  setup(props) {
    const Config = computed(() => {
      return { ...FORM_DETAIL_DEFAULT_CONFIG, ...props.config }
    })
    return {
      Config
    }
  }
})
</script>
<style lang="scss" scoped>
.base-form-detail {
  flex: 1;
  .form-detail {
    @include layout(row, nowrap);
  }
  .van-cell-group {
    width: 100%;
    ::v-deep .van-field__control--min-height {
      min-height: 20px;
    }
    .van-cell {
      padding: 0;
      margin-top: 10px;
      font-size: var(--van-font-size-sm);
      line-height: var(--van-line-height-sm);
    }
  }
}
</style>
