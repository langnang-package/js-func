/**
 * @name is_object
 * @description 检测对象是否为对象类型
 * @param {*} object 需要检测的对象
 * @returns {Boolean} 检测结果
 */
export const is_object = (object: any) =>
  Object.prototype.toString.call(object) === "[object Object]";
