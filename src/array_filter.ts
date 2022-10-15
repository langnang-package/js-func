import { array_push } from "./array_push";
/**
 * @name array_filter
 * @description 过滤数组，并将符合条件（返回 `true`）的数组元素放进一个新数组中并返回。
 * @category Array 数组
 * @since 0.0.1
 * @param {Array} array 需要处理的数组。
 * @param {*} predicate(element, index, array) 每次迭代调用的函数。
 * * @param {*} element 当前遍历到的元素。
 * * @param {Number} index 当前遍历到的索引。
 * * @param {Array} array 数组本身。
 * @returns {Array} 返回一个新的过滤后的数组。
 * @tutorial https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 * @tutorial https://www.lodashjs.com/docs/lodash.filter
 * @tutorial https://underscorejs.net/#filter
 */
export const array_filter = (array: any[], predicate: any): any[] => {
  let result: any[] = [];
  for (let key in array) {
    if (predicate(array[key], key, array)) {
      array_push(result, array[key]);
    }
  }
  return result;
};
