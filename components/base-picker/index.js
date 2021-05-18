// components/base-picker/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    options: {
      type: Array,
      value: []
    },
    rangeKey: {
      type: String,
      value: 'label'
    },
    value: {
      type: [String, Number]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    selected: 0
  },
  observers: {
    value(v) {
      if (!this.data.options || !this.data.options.length) return

      const index = this.data.options.findIndex(({
        value
      }) => value === v)

      this.setData({
        selected: index
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    handleChange(e) {
      const {
        value: index
      } = e.detail
      const {
        value
      } = this.data.options[index]

      this.triggerEvent('change', value)
      this.setData({
        value
      })
    }
  }
})