import { array_push } from "./array_push";
/**
 * @name array_map
 * @description 遍历数组，根据 `iteratee`（迭代函数）遍历所有元素返回的结果所组成新的数组。
 * @tag Array 数组
 * @syntax array_map(array, iteratee(element, index, array));
 * @param {Array} array 需要处理的数组。
 * @param {Function} iteratee 每次迭代调用的函数。
 * * @param {*} element 当前遍历到的元素。
 * * @param {Number} index 当前遍历到的索引。
 * * @param {Array} array 数组本身。
 * @param {*} this_arg 执行回调时用作 `this` 的对象。
 * @returns {Array} 根据 `iteratee`（迭代函数）遍历所有元素返回的结果所组成新的数组。
 * @tutorial https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 * @tutorial https://www.lodashjs.com/docs/lodash.map
 * @tutorial https://underscorejs.net/#map
 */
export const array_map = (array: any[], iteratee: any, this_arg: any = null) => {
  let result: any[] = [];
  for (let key in array) {
    array_push(result, iteratee(array[key], key, array));
  }
  return result;
};
