// components/base-image/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    width: {
      type: String
    },
    height: {
      type: String
    },
    lazy: {
      type: Boolean
    },
    round: {
      type: Boolean
    },
    radius: {
      type: [String, Number]
    },
    src: {
      type: String
    },
    fit: {
      type: String,
      value: 'contain'
    },
    urls: {
      type: Array
    },
    preview: {
      type: Boolean,
      value: true
    },
  },
  methods: {
    onPreviewImage() {
      if (!this.data.preview) return

      const {
        urls = []
      } = this.data

      if (!urls || !urls.length) return

      wx.previewImage({
        urls,
        current: this.data.src || ''
      })
    }
  }
})