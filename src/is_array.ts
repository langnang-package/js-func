/**
 * @name is_array
 * @description 检测对象是否为数组类型
 * @since 0.0.1
 * @param {*} object 需要检测的对象
 * @returns {Boolean} 检测结果
 */
export const is_array = (object: any): boolean =>
  Object.prototype.toString.call(object) === "[object Array]";
