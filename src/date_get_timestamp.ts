/**
 * @name date_get_timestamp
 * @description 获取 `Date` 对象的时间戳
 * @tag Date
 * @since 0.0.2
 * @param {Date} date 需要处理的 `Date` 对象
 * @return {Number} 对应的时间戳
 */
export const date_get_timestamp = (date: Date): number => date.getTime()