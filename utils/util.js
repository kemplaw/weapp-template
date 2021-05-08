const formatNumber = (n) => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

/**
 * @description: 格式化时间
 * @param {*} date
 * @param {*} sperate
 * @return {*}
 */
export const formatTime = (date, sperate = '-') => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join(sperate)} ${[
    hour,
    minute,
    second,
  ]
    .map(formatNumber)
    .join(':')}`
}
