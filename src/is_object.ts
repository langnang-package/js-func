/**
 * @name isObject
 * @desc 判断是否是Object
 * @param {*} object
 * @return {Boolean}
 */

// TODO
export const is_object = (object: any) =>
  Object.prototype.toString.call(object) === "[object Object]";
