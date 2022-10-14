/**
 * @name array_reduce_right
 * @description 自右到左遍历数组元素，每一次运行 `iteratee` 迭代函数会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值。
 * @category Array 数组
 * @since 0.0.1
 * @param {Array} array 需要处理的数组。
 * @param {*} iteratee(element, index, array) 每次迭代调用的函数。
 * * @param {*} previous_value 上一次调用 `iteratee` 时的返回值。
 * * @param {*} element 当前遍历到的元素。
 * * @param {Number} index 当前遍历到的索引。
 * * @param {Array} array 数组本身。
 * @param {*} initial_value 作为第一次调用 `iteratee` 函数时参数 `previous_value` 的值。
 * @returns {Array} 使用 `iteratee` 迭代函数遍历整个数组后的结果。
 * @tutorial https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight
 * @tutorial https://www.lodashjs.com/docs/lodash.reduceRight
 * @tutorial https://underscorejs.net/#reduceRight
 */
export const array_reduce_right = (array: any[], iteratee: any, initial_value: any) => {
  for (let i = array.length - 1; i >= 0; i--) {
    initial_value = iteratee(initial_value, array[i], i, array);
  }
  return initial_value;
};
