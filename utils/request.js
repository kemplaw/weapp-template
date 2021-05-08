import config from '../config'

function request({ url, ...restOptions } = {}) {
  wx.showLoading({
    icon: 'loading',
  })

  return new Promise((resolve, reject) => {
    wx.request({
      timeout: 5 * 1000,
      ...restOptions,
      url: config.baseUrl + url,
      success({ data, statusCode }) {
        wx.hideLoading()

        if (statusCode === 200) {
          return resolve(data)
        }

        reject(data)
      },
      fail() {
        wx.hideLoading()
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
  static get(url, data) {
    return new Promise((resolve, reject) => {
      request({ url, method: 'GET', data }).then(resolve).catch(reject)
    })
  }

  static post(url, data) {
    return new Promise((resolve, reject) => {
      request({ url, method: 'POST', data }).then(resolve).catch(reject)
    })
  }
}
