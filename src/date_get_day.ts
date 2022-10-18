/**
 * @name date_get_day
 * @description 根据本地时间，返回一个指定的日期对象为一个月中的哪一日（从 1--31）。
 * @category Date
 * @since 0.0.2
 * @param {Date} date 需要处理的 `Date` 对象
 * @returns {Number}  返回一个 1 到 31 的整数值。
 * @tutorial https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate
 */
export const date_get_day = (date: Date): number => date.getDate();
