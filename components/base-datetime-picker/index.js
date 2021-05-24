import {
  formatDate,
  formatTime
} from "../../utils/util"

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    options: {
      type: Array,
      value: []
    },
    visible: {
      type: Boolean,
      value: false
    },
    value: {
      type: String,
      value: Date.now()
    },
    // 是否格式化时间的值
    formatValue: {
      type: Boolean,
      value: true
    },
    minitus: {
      type: Boolean
    }
  },
  data: {
    dateValue: ''
  },
  observers: {
    visible(n) {
      if (n) {
        this.setData({
          dateValue: new Date(this.data.value)
        })
      }
    }
  },
  methods: {
    handleConfirm({
      detail
    }) {

      const date = new Date(detail)
      const value = this.data.formatValue ? `${formatTime(date)}` : detail

      this.triggerEvent("change", value)
      this.setData({
        visible: false,
        value
      })
    },
    handleCancel() {
      this.setData({
        visible: false
      })
    },
    handleClose() {
      this.setData({
        visible: false
      })
    }
  }
})