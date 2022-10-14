/**
 * @name is_string
 * @description 检测对象是否为字符串类型
 * @param {*} object 需要检测的对象
 * @returns {Boolean} 检测结果
 */
export const is_string = (object: any): boolean =>
  Object.prototype.toString.call(object) === "[object String]";
