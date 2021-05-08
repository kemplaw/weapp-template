import Request from '../utils/request'

// 登录接口
export const login = (data) => Request.post('/login', data)
