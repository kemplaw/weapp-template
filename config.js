/**
 * @description: 项目配置
 */

export const DEV_URL = 'http://192.168.1.147:8082'
export const PROD_URL = ''

export const BASE_URL = DEV_URL

// 请求超时时间
export const REQUEST_TIME_OUT = 5 * 1000

// token 过期毫秒数 默认七天
export const TOKEN_EXPIRES = 7 * 3600 * 24

// 验证码等待时间(秒)
export const VERIFY_CODE_DELAY = 30