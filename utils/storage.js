/**
 * 设置缓存
 * @param {*} key
 * @param {*} data
 * @param {*} expires 缓存过期时间 为毫秒值
 */
export const setStorage = (key, data, expires) => {
  if (!key) throw Error('storage setter need key')

  wx.setStorageSync(key, {
    data,
    expires,
  })
}

// 用户信息 storage key
export const USERINFO_STORAGE_KEY = 'USERINFO_STORAGE_KEY'

// wechat 信息
export const WECHAT_STORAGE_KEY = 'WECHAT_STORAGE_KEY'

// token key
export const TOKEN_STORAGE_KEY = 'TOKEN_STORAGE_KEY'
