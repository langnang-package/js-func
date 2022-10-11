/**
 * @name isUndefined
 * @desc 判断是否是Undefined
 * @param {*} object
 * @return {Boolean}
 */

// TODO
export const is_undefined = (object: any) =>
  Object.prototype.toString.call(object) === "[object Undefined]";
