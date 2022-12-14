/**
 * @name is_primitive
 * @description 检测对象是否是原始数据类型
 * @param {*} object 需要检测的对象
 * @returns {Boolean} 检测结果
 */
export const is_primitive = (object: any) =>
  typeof object === "string" ||
  typeof object === "number" ||
  typeof object === "symbol" ||
  typeof object === "boolean";
