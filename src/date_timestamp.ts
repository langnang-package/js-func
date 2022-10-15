/**
 * @name date_timestamp
 * @description 获取指定时间的时间戳
 * @tag Date
 * @since 0.0.2
 * @param {Date} date 需要处理的指定时间
 * @return {Number} 指定时间对应的时间戳
 */
export const date_timestamp = (date: Date): number => date.getTime()