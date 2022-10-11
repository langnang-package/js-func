/**
 * @name isString
 * @desc 检测是否为字符串
 * @param {*} object
 * @return {Boolean}
 */

// TODO
export const is_string = (object: any) =>
  Object.prototype.toString.call(object) === "[object String]";
