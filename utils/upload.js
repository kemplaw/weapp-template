import {
  BASE_URL
} from '../config'
import {
  getToken
} from './util'

/**
 * 单文件上传
 * @param {string} src 
 * @param {string} name 表单key
 * @param {string} url 
 */
const upload = ({
  src,
  url,
  name
} = {}) => {
  return new Promise((resolve, reject) => {
    wx.uploadFile({
      filePath: src,
      name,
      header: {
        token: getToken()
      },
      url: BASE_URL + url,
      success: resolve,
      fail: (err) => {
        wx.showToast({
          icon: 'error',
          title: '上传失败',
        })

        reject(err)
      }
    })
  })
}

/**
 * 批量上传
 * @param {string[]} src
 * @param {string} name
 * @param {string} url 
 */
const uploadMultiple = ({
  src = [],
  ...restOptions
} = {}) => {
  const promiseQueue = src.map(v => upload({
    src: v,
    ...restOptions
  }))

  return Promise.all(promiseQueue)
}

/**
 * 上传静态文件
 * @param {string|string[]} src 上传地址
 * @param {string} name 表单键名
 * @param {string} url 上传地址
 * @param {boolean} multiple 是否开启批量上传 
 */
export const uploadAssets = ({
  multiple = false,
  ...restOptions
} = {}) => {
  if (multiple) return uploadMultiple(restOptions)

  return upload(restOptions)
}