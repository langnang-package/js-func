/**
 * @name array_count
 * @description 遍历数组，计数统计使用 `iteratee` 迭代函数处理每个元素后返回结果的出现次数
 * @tag Array 数组
 * @syntax array_count(array, [iteratee = null, [this_arg = null]);
 * @param {Array} array 需要处理的数组。
 * @param {*} iteratee 每次迭代调用的函数。
 * * @param {*} element 当前遍历到的元素。
 * * @param {Number} index 当前遍历到的索引。
 * * @param {Array} array 数组本身。
 * @param {*} this_arg 执行回调时用作 `this` 的对象。
 * @returns {Object} 返回一个组成集合对象。
 * @tutorial https://www.lodashjs.com/docs/lodash.countBy
 * @tutorial https://underscorejs.net/#countBy
 */
export const array_count = (array: any[], iteratee: any = null, this_arg: any = null): any => {
  let result = iteratee ? array.map(iteratee) : [...array];
  return result.reduce((total: object, current_value: any) => {
    total[current_value] = (total[current_value] || 0) + 1;
    return total;
  }, {})
}
