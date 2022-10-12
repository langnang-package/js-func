/**
 * @name is_function
 * @description 检测对象是否为函数类型
 * @param {*} object 需要检测的对象
 * @returns {Boolean} 检测结果
 */
export const is_function = (object: any) =>
  Object.prototype.toString.call(object) === "[object Function]";
