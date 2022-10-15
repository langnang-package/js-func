/**
 * @name tomorrow
 * @description 返回 `date` 往后一天的同一时间
 * @category Date
 * @since 0.0.2
 * @param {Date} date 需要处理的 `date`
 * @returns {Date} 往后一天的同一时间
 */
export const tomorrow = (date: Date): Date => new Date(date.getTime() + 24 * 60 * 60 * 1000)