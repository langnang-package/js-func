import { is_array } from "./is_array";
/**
 * @name array_flat
 * @desc 按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。
 * @param {Array} array 需要处理的数组
 * @param {Number} [depth = 1] 指定要提取嵌套数组的结构深度，默认值为 1。0：不提取，-1：提取所有深度。
 * @returns {Array} 一个包含将数组与子数组中所有元素的新数组。
 * @tutorial https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
 * @tutorial https://www.lodashjs.com/docs/lodash.flatten
 * @tutorial https://www.lodashjs.com/docs/lodash.flattenDeep
 * @tutorial https://www.lodashjs.com/docs/lodash.flattenDepth
 * @tutorial https://underscorejs.net/#flatten
 */

export const array_flat = (array: any[], depth: number = 1): any[] => {
  if (depth >= 1) {
    return array.reduce(
      (a, v) => a.concat(is_array(v) ? array_flat(v, depth - 1) : v),
      []
    );
  }
  if (depth === 0) {
    return array;
  }
  if (depth === -1) {
    return array.reduce((a, v) => a.concat(is_array(v) ? array_flat(v, -1) : v), []);
  }
};
