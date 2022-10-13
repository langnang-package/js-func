/**
 * @name is_boolean
 * @description 检测对象是否为布尔类型
 * @syntax ;
 * @param {*} object 需要检测的对象
 * @returns {Boolean} 检测结果
 */
export const is_boolean = (object: any) =>
  Object.prototype.toString.call(object) === "[object Boolean]";
