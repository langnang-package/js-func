/**
 * @name is_regexp
 * @description 检测对象是否为 `RegExp` 类型
 * @param {*} object 需要检测的对象
 * @returns {Boolean} 检测结果
 */
export const is_regexp = (object: any) =>
  Object.prototype.toString.call(object) === "[object RegExp]";
