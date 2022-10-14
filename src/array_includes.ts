import { array_index } from "./array_index";
/**
 * @name array_includes
 * @description 判断数组是否包含一个指定的值，如果包含则返回 true，否则返回 false。
 * @tag Array 数组
 * @param {Array} array 需要处理的数组。
 * @param {*} value 需要查找的元素值。
 * @param {Number} [from_index = 0] 起始索引，默认值为 0。
 * @returns {Boolean} 检测结果
 * @tutorial https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
 * @tutorial https://www.lodashjs.com/docs/lodash.includes
 * @tutorial https://underscorejs.net/#contains
 */
export const array_includes = (array: any[], value: any, from_index: number = 0): boolean => {
  if (from_index >= array.length) return false;

  from_index = from_index < 0 ? array.length + from_index : from_index;

  return array_index(array, value, from_index) > -1;

}
