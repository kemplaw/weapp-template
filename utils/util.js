import { TOKEN_EXPIRES } from '../config'
import { TOKEN_STORAGE_KEY } from './storage'
import { isImage, isVideo } from './regex'

const formatNumber = (n) => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

export const formatDate = (date, sperate = '-') => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  return `${[year, month, day].map(formatNumber).join(sperate)}`
}

/**
 * @description: 格式化时间
 * @param {*} date
 * @param {*} sperate
 * @return {*}
 */
export const formatTime = (date, sperate = '-') => {
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const getDate = formatTime(date, sperate)

  return `$${getDate} ${[hour, minute, second].map(formatNumber).join('')}`
}

/**
 * token是否有效
 * @param {string} key
 * @return {boolean}
 */
export const isTokenValid = (key) => {
  const { data, expires } = wx.getStorageSync(key)

  if (!data) return false

  if (!expires) return true

  const isExpired = expires - Date.now() < TOKEN_EXPIRES

  return isExpired
}

/**
 * 获取 token
 * @param {boolean} isNeedBearer
 */
export const getToken = (isNeedBearer = false) => {
  const { data } = wx.getStorageSync(TOKEN_STORAGE_KEY) || {}

  if (!data) return

  return isNeedBearer ? `Bearer ${data}` : data
}

/**
 * 反选对象的key
 * @param {object} data 原始数据
 * @param {Array} pickList key列表
 */
export const omit = (data, pickList) => {
  if (!data || typeof data !== 'object') {
    return data
  }

  if (!pickList || !pickList.length) {
    return data
  }

  let obj = {}

  for (let key in data) {
    if (!pickList.includes(key) && key !== '__webviewId__') {
      obj[key] = data[key]
    }
  }

  return obj
}
