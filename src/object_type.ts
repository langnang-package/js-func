/**
 * @name object_type
 * @description 检测对象的数据类型
 * @param {*} object 需要检测的对象
 * @returns {String} 对象的数据类型
 */
export const object_type = (object: any): string =>
  Object.prototype.toString
    .call(object)
    .substring(8, Object.prototype.toString.call(object).length - 1)
    .toLowerCase();
