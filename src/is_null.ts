/**
 * @name is_null
 * @description 检测对象是否为 `Null`
 * @param {*} object 需要检测的对象
 * @returns {Boolean} 检测结果
 */
export const is_null = (object: any) =>
  Object.prototype.toString.call(object) === "[object Null]";
