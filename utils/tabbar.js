import Store from "./Store"

export const defaultTabBarList = [{
    pagePath: '/pages/illegal-record/index',
    iconPath: '../assets/icons/index.svg',
    selectedIconPath: '../assets/icons/index_1.svg',
    text: '违法记录',
  },
  {
    pagePath: '/pages/illegal-register/index',
    iconPath: '../assets/icons/edit.svg',
    selectedIconPath: '',
    text: '违法登记',
  },
  {
    pagePath: '/pages/my/index',
    iconPath: '../assets/icons/person_1.svg',
    selectedIconPath: '../assets/icons/person_2.svg',
    text: '我的',
  },
]

/**
 * 获取tabbar下标
 * @param {boolean} isPolice 
 * @param {string} tabName 
 */
const getTabBarSelectedIndex = (isPolice = false, tabName) => {
  let selected = 0

  switch (tabName) {
    case 'record':
      selected = 0
      break;
    case 'register':
      selected = 1
      break;
    case 'my':
      selected = isPolice ? 2 : 1
      break;
    default:
      selected = 0
      break
  }

  return selected
}

/**
 * 设置tabbar状态
 * @param {object} getTabBar tabbar实例获取
 * @param {'record'|'register'|'my'} tabName tab页面的名称 
 * @param {function} cb 回调函数
 */
export const setTabbarState = (tabBar, tabName = 'record', cb) => {
  if (!tabBar) return

  const store = Store.getStore()
  const {
    isPolice = false
  } = store.state

  const list = isPolice ? defaultTabBarList : defaultTabBarList.filter(({
    text
  }) => text !== '违法登记')

  const selected = getTabBarSelectedIndex(isPolice, tabName)

  tabBar.setData({
    list,
    isPolice,
    selected
  }, () => cb && cb())
}