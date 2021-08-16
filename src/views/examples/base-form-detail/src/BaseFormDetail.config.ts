import { reactive } from 'vue'
import { FormDetailAdapter } from '@/components/base/form-detail/src/BaseFormDetail.adapter'
export function PpsBaseFormDetailConfig() {
  const formConfig = reactive<FormDetailAdapter>({
    formModel: {
      label1: '第一列长标题第一列长标题第一列长标题第一列长标题',
      label2: '第一列短标题',
      label3: '第二列长标题',
      label4: '第二列短标题'
    },
    title: '基础用法',
    form: [
      {
        fieldConfig: [
          {
            label: '长长久久的长标题',
            name: 'label1'
          },
          {
            label: '短标题',
            name: 'label2'
          },
          {
            label: '长长久久的长标题',
            name: 'label1'
          },
          {
            label: '短标题',
            name: 'label2'
          }
        ]
      },
      {
        fieldConfig: [
          {
            label: '第二列',
            name: 'label3'
          },
          {
            label: '第二列',
            name: 'label4'
          },
          {
            label: '长长久久的长标题',
            name: 'label1'
          },
          {
            label: '短标题',
            name: 'label2'
          }
        ]
      }
    ]
  })
  return {
    formConfig
  }
}
