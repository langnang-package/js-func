/**
 * @name array_foreach
 * @description 遍历数组，调用 `iteratee` 遍历数组中的每个元素。如果迭代函数（iteratee）显式的返回 false ，迭代会提前退出。
 * @category Array 数组
 * @since 0.0.1
 * @param {Array} array 需要处理的数组。
 * @param {*} iteratee(element, index, array) 每次迭代调用的函数。
 * * @param {*} element 当前遍历到的元素。
 * * @param {Number} index 当前遍历到的索引。
 * * @param {Array} array 数组本身。
 * @returns {*} 返回数组执行遍历的次数，一般为数组的长度。
 * @tutorial https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 * @tutorial https://www.lodashjs.com/docs/lodash.forEach
 */
export const array_foreach = (array: any[], iteratee: any) => {
  let len: number = 0;
  while (len < array.length) {
    const truth = iteratee(array[len], len, array);

    len++;

    if (!truth) break;
  }
  return len;
};
