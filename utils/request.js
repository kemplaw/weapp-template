import {
  BASE_URL,
  REQUEST_TIME_OUT
} from '../config'
import {
  getToken
} from './util'
import {
  logout
} from '../api/my'


const RQUEST_SUCCESS_CODE = 200
const NEED_AUTH_CODE = 401

function request({
  url,
  ...restOptions
} = {}) {
  return new Promise((resolve, reject) => {
    wx.request({
      timeout: REQUEST_TIME_OUT,
      header: {
        token: getToken()
      },
      ...restOptions,
      url: BASE_URL + url,
      success({
        data,
        statusCode
      }) {
        if (statusCode === RQUEST_SUCCESS_CODE) {
          // 请求成功

          if (!data.success) {
            wx.showToast({
              icon: 'none',
              title: data.message || `未知错误${data.code}`,
            })

            return reject(data)
          }

          return resolve(data)
        } else if (Number(data.message) === NEED_AUTH_CODE) {
          // 授权失效

          wx.showToast({
            icon: 'none',
            title: '登录过期，请重新登录',
          })

          logout(false)

          return reject(data)
        }

        // 其他情况
        wx.showToast({
          icon: 'none',
          title: data.message || `未知错误${data.code}`,
        })

        reject(data)
      },
      fail() {
        wx.showToast({
          icon: 'error',
          title: '网络错误',
        })

        reject()
      },
    })
  })
}

export default class Request {
  /**
   * get
   * @param {string} url 请求路径
   * @param {any} data 数据
   */
  static get(url, data) {
    return new Promise((resolve, reject) => {
      request({
        url,
        method: 'GET',
        data
      }).then(resolve).catch(reject)
    })
  }

  /**
   * post
   * @param {string} url 请求路径
   * @param {any} data 数据
   */
  static post(url, data) {
    return new Promise((resolve, reject) => {
      request({
        url,
        method: 'POST',
        data
      }).then(resolve).catch(reject)
    })
  }
}