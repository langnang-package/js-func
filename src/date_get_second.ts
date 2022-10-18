/**
 * @name date_get_second
 * @description 根据本地时间，返回一个指定的日期对象的秒数。
 * @category Date
 * @since 0.0.2
 * @param {Date} date 需要处理的 `Date` 对象
 * @returns {Number}  返回一个 0 到 59 的整数值。
 * @tutorial https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getSeconds
 */
export const date_get_second = (date: Date): number => date.getSeconds();
