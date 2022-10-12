/**
 * @name is_symbol
 * @description 检测对象是否为 `Symbol`
 * @param {*} object 需要检测的对象
 * @returns {Boolean} 检测结果
 */
export const is_symbol = (object: any): boolean =>
  Object.prototype.toString.call(object) === "[object Symbol]";
