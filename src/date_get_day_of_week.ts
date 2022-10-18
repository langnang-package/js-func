/**
 * @name date_get_day_of_week
 * @description 根据本地时间，返回一个具体日期中一周的第几天，0 表示星期天。
 * @category Date
 * @since 0.0.2
 * @param {Date} date 需要处理的 `Date` 对象
 * @returns {Number} 返回一个 0 到 6 的整数值。0 代表星期日，1 代表星期一，2 代表星期二，依次类推。
 * @tutorial https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay
 */
export const date_get_day_of_week = (date: Date): number => date.getDay();
