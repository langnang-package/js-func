/**
 * @name date_get_hour
 * @description 根据本地时间，返回一个指定的日期对象的小时。
 * @category Date
 * @since 0.0.2
 * @param {Date} date 需要处理的 `Date` 对象
 * @returns {Number} 返回一个 0 到 23 之间的整数值。
 * @tutorial https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours
 */
export const date_get_hour = (date: Date): number => date.getHours();
