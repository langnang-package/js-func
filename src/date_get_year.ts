/**
 * @name date_get_year
 * @description 根据本地时间返回指定日期的年份。
 * @category Date
 * @since 0.0.2
 * @param {Date} date 需要处理的 `Date` 对象
 * @returns {Number} 返回一个对应于给定日期的年份数字。
 * @tutorial https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear
 */
export const date_get_year = (date: Date): number => date.getFullYear();
