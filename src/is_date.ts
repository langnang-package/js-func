/**
 * @name is_date
 * @description 检测对象是否为 `Date` 类型
 * @syntax ;
 * @param {*} object 需要检测的对象
 * @returns {Boolean} 检测结果
 */
export const is_date = (object: any): boolean =>
  Object.prototype.toString.call(object) === "[object Date]";
