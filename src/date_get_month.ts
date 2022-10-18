/**
 * @name date_get_month
 * @description 根据本地时间，返回一个指定的日期对象的月份，为基于 0 的值（0 表示一年中的第一月）。
 * @category Date
 * @since 0.0.2
 * @param {Date} date 需要处理的 `Date` 对象
 * @returns {Number}  返回一个 0 到 11 的整数值：0 代表一月份，1 代表二月份，2 代表三月份，依次类推。
 * @tutorial https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth
 */
export const date_get_month = (date: Date): number => date.getMonth();
