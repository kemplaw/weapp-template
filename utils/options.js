import { IUserTypeZh } from './types'

/**
 * @description: 枚举选项生成
 * @param {{[key: string]: string|number}} enumTypeZh 枚举label映射
 * @return {{label: string; value: string}[]}
 */
const getOptionsByEnum = (enumTypeZh) => {
  return Object.keys(enumTypeZh).map((v) => ({
    label: enumTypeZh[v],
    value: v,
  }))
}

export const IUserTypeOptions = getOptionsByEnum(IUserTypeZh)
