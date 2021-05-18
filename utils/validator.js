/**
 * 错误信息范式化
 * @param {Array} fiels 错误信息 
 */
export const normalizedFormErrors = (fiels = {}) => {
  const obj = {}

  if (!fiels) return obj

  for (const key in fiels) {
    const [err] = fiels[key];
    const {
      message = ''
    } = err || {}

    obj[key] = message
  }

  return obj
}

/**
 * @description: 表单验证器
 * @param {object} formValue
 * @param {Schema} validator - 具有 validate 函数的表单验证实例
 * @return {{valid: boolean; errors: object}}
 */
export const validate = (formValue, validator) => {
  return new Promise((resolve) => {

    if (!validator || typeof validator.validate !== 'function') {
      resolve({
        valid: false
      })

      return
    }

    validator.validate(formValue)
      .then(() => resolve({
        valid: true
      }))
      .catch(({
        fields = []
      }) => {
        resolve({
          valid: false,
          errors: normalizedFormErrors(fields)
        })
      })
  })
}