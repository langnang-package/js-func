import { array_sort_iteratee_charat } from "./array_sort";

/**
 * @name array_sorted
 * @description 检测数组是否已排序。如果数组按升序排序，则返回 1;如果按降序排序，则返回 -1;如果未排序，则返回 0。
 * @category Array 数组
 * @since 0.0.1
 * @param {Array} array 需要处理的数组。
 * @param {*} iteratee(element, index, array) 每次迭代调用的函数。
 * * @param {*} a 第一个用于比较的元素。
 * * @param {*} b 第二个用于比较的元素。
 * @returns {Number} 检测的结果。
 * @tutorial https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 */
export const array_sorted = (array: any[], iteratee: any = null) => {
  if (!iteratee) iteratee = array_sort_iteratee_charat;
  let i = 1,
    is_sorted = iteratee(array[0], array[1]) > 1 ? 1 : -1;
  while (i < array.length) {
    if (is_sorted !== (iteratee(array[i - 1], array[i]) > 1 ? 1 : -1)) {
      return 0;
    }
    i++;
  }
  return is_sorted;
};
