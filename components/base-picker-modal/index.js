import {
  behavior
} from 'miniprogram-computed'

const ComputedBehavior = Behavior(behavior)

Component({
  /**
   * 组件的属性列表
   */
  behaviors: [ComputedBehavior],
  properties: {
    options: {
      type: Array,
      value: []
    },
    visible: {
      type: Boolean
    },
    valueKey: {
      type: String,
      value: 'label'
    },
    value: {
      type: String,
    },
  },
  data: {
    show: false
  },
  computed: {
    defaultIndex({
      options = [],
      value
    }) {

      return options.findIndex(({
        value: v
      }) => v === value)
    }
  },
  observers: {
    visible(n) {
      this.setData({
        show: n
      })
    },
  },
  methods: {
    onToggleModal() {
      this.setData({
        visible: !this.data.visible
      })
    },
    onConfirm(e) {
      const {
        value = ''
      } = e.detail.value
      this.setData({
        visible: false,
        value
      })
      this.triggerEvent('change', value)
    },
    onCancel() {
      this.setData({
        visible: false
      })
    }
  }
})