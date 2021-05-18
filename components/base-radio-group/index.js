// components/base-radio-group/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    options: {
      type: Array
    },
    gap: {
      type: String,
      value: '20rpx'
    },
    customStyle: {
      type: String
    },
    value: {
      type: [Number, String]
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    selected: undefined,
    icon: {
      active: '../../assets/icons/check_2.svg',
      default: '../../assets/icons/check_1.svg',
    }
  },
  observers: {
    value(n) {
      this.setData({
        selected: n
      })
    }
  },
  methods: {
    onChange({
      detail: value
    }) {
      this.setData({
        value
      })
      this.triggerEvent('change', value)
    }
  }
})