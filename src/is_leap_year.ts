/**
 * @name is_leap_year
 * @description 检测 `date` 是否为闰年
 * @since 0.0.2
 * @param {Date|Number|String} date 需要检测的 `date`
 * @returns {Boolean} 检测结果
 */
export const is_leap_year = (date: Date | number | string): Boolean => (new Date(date)).getFullYear() % 4 === 0