/**
 * @name isNull
 * @desc 判断是否是Null
 * @param {*} object
 * @return {Boolean}
 */
// TODO
export const is_null = (object: any) =>
  Object.prototype.toString.call(object) === "[object Null]";
