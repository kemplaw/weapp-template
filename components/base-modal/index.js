import {
  IModalType
} from '../../utils/types'

// components/base-modal/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // modal 类型
    type: {
      type: String,
      value: IModalType.SUCCESS
    },
    // modal 标题
    title: {
      type: String
    },
    // modal 内容
    content: {
      type: String
    },
    // 是否使用content slot
    useContentSlot: {
      type: Boolean
    },
    // 是否使用 title slot
    useTitleSlot: {
      type: Boolean
    },
    // 是否使用 button slot
    useButtonSlot: {
      type: Boolean
    },
    buttons: {
      type: Array
    },
    // modal 显示
    visible: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    bgSrcMap: {
      [IModalType.DANGER]: '../../assets/icons/danger.svg',
      [IModalType.INFO]: '../../assets/icons/info.svg',
      [IModalType.WARNING]: '../../assets/icons/warn.svg',
      [IModalType.SUCCESS]: '../../assets/icons/success.svg',
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClick(e) {
      const {
        item
      } = e.currentTarget.dataset
      this.triggerEvent('buttonclick', item)
    },
    handleModalClose() {
      this.triggerEvent('close')
    }
  }
})