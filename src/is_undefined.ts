/**
 * @name is_undefined
 * @description 检测对象是否为 `Undefined`
 * @syntax ;
 * @param {*} object 需要检测的对象
 * @returns {Boolean} 检测结果
 */
export const is_undefined = (object: any) =>
  Object.prototype.toString.call(object) === "[object Undefined]";
