/**
 * 日期前的n天
 * @param {*} date
 * @param {*} n
 */
export const prev_days = (date, n = 1) =>
  new Date(date.getTime() - n * 24 * 60 * 60 * 1000);
