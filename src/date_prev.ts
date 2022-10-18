/**
 * 日期前的n天
 * @param {*} date
 * @param {*} n
 */
export const date_prev = (date: Date, interval: string, n = 1) =>
  new Date(date.getTime() - n * 24 * 60 * 60 * 1000);