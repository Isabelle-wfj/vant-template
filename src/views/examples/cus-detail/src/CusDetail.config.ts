import { DetailAdapter } from '@/components/customize/detail/src/CusDetail.adapter'
export function PpsCusDetailConfig() {
  const detailConfig: DetailAdapter = {
    title: '我是产品编号加产品哇，厉不厉害',
    sub: '我是副标题，超油魔力的',
    showBtn: true,
    showNotice: true,
    showTag: true,
    showForm: true,
    showTip: true,
    noticeConfig: {
      title: '我是',
      on: {
        click: () => {
          console.log('notice')
        },
        close: () => {
          console.log('关闭了')
        }
      }
    },
    tagConfig: [
      {
        text: '标签'
      },
      {
        text: '标签',
        textColor: '#fff',
        color: 'red',
        plain: false
      }
    ],
    btnConfig: [
      {
        text: '主按钮',
        on: {
          click: () => {
            console.log('主按钮单击了')
          }
        }
      },
      {
        text: '次按钮',
        type: 'default',
        plain: true,
        on: {
          click: () => {
            console.log('次按钮单击了')
          }
        }
      }
    ],
    formConfig: {
      formModel: {
        label1: '第一列长标题第一列长标题第一列长标题第一列长标题',
        label2: '第一列短标题',
        label3: '第二列长标题',
        label4: '第二列短标题'
      },
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
              label: '第二列短标题',
              name: 'label4'
            }
          ]
        }
      ]
    },
    statusConfig: {
      className: 'pps-success',
      text: '保单生效'
    }
  }
  return detailConfig
}
