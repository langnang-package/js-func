/**
 * @name date_get_minute
 * @description 根据本地时间，返回一个指定的日期对象的分钟数。
 * @category Date
 * @since 0.0.2
 * @param {Date} date 需要处理的 `Date` 对象
 * @returns {Number}  返回一个 0 到 59 的整数值。
 * @tutorial https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getMinutes
 */
export const date_get_minute = (date: Date): number => date.getMinutes();
