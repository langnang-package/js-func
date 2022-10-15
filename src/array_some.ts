/**
 * @name array_some
 * @description 遍历数组，通过 `predicate` 断言函数检测数组中的元素是否存在任意元素通过测试。如果存在元素能通过就返回 `true`，否则返回 `false` 。
 * @category Array 数组
 * @since 0.0.1
 * @param {Array} array 需要处理的数组。
 * @param {*} predicate(element, index, array) 每次迭代调用的函数。
 * * @param {*} element 当前遍历到的元素。
 * * @param {Number} index 当前遍历到的索引。
 * * @param {Array} array 数组本身。
 * @returns {Boolean} 如果存在元素通过 `predicate` 断言函数检测后返回真值，那么就返回 `true`，否则返回 `false` 。
 * @tutorial https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some
 * @tutorial https://www.lodashjs.com/docs/lodash.some
 */
export const array_some = (array: any[], predicate: Function) => {
  for (let key in array) {
    if (predicate(array[key], key, array)) return true;
  }
  return false;
};
