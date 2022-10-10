/**
 * @name array_every
 * @description 遍历数组，测试数组内的所有元素是否都能通过 `predicate` 迭代函数的测试。如果所有元素都通过就返回 `true`，否则返回 `false` 。
 * @param {Array} array 需要处理的数组。
 * @param {Function} predicate 每次迭代调用的函数。
 * * @param {*} element 当前遍历到的元素。
 * * @param {Number} index 当前遍历到的索引。
 * * @param {Array} array 数组本身。
 * @param {*} this_arg 执行回调时用作 `this` 的对象。
 * @returns {Boolean} 如果所有元素通过 `predicate` 迭代函数检测后都返回真值，那么就返回 `true`，否则返回 `false` 。
 * @reference https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every
 * @reference https://www.lodashjs.com/docs/lodash.every
 * @reference https://underscorejs.net/#every
 */
export const array_every = (array: any[], predicate: any, this_arg: any = null) => {
  for (let key in array) {
    if (!predicate(array[key], key, array)) {
      return false;
    }
  }
  return true;
};
