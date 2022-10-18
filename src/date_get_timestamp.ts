/**
 * @name date_get_timestamp
 * @description 返回一个时间的格林威治时间数值。
 * @category Date
 * @since 0.0.2
 * @param {Date} date 需要处理的 `Date` 对象
 * @returns {Number} 返回一个数值，表示从 1970 年 1 月 1 日 0 时 0 分 0 秒（UTC，即协调世界时）距离该日期对象所代表时间的毫秒数
 * @tutorial https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime
 */
export const date_get_timestamp = (date: Date): number => date.getTime()