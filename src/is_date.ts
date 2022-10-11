/**
 * @name isDate
 * @desc 检测Date
 * @param {*} obj
 */
// TODO
export const is_date = (object: any) =>
  Object.prototype.toString.call(object) === "[object Date]";
