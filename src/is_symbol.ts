/**
 * @name isSymbol
 * @desc 判断是否是Symbol
 * @param {*} object
 * @return {Boolean}
 */
// TODO
export const is_symbol = (object: any) =>
  Object.prototype.toString.call(object) === "[object Symbol]";
