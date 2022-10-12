/**
 * 算法原理
 * 1. 把长度为 n 的输入序列分成两个长度为 n/2 的子序列；
 * 2. 对这两个子序列分别采用归并排序；
 * 3. 将两个排序好的子序列合并成一个最终的排序序列。
 */
/**
 * @name merge_sort
 * @description 归并排序。递归分割序列,比较合并已排序序列。
 * @param {Array} array 需要处理的数组。
 * @param {Function} iteratee 每次迭代调用的函数。
 * * @param {*} a 第一个用于比较的元素。
 * * @param {*} b 第二个用于比较的元素。
 * @returns {Array} 排序后的数组。
 */
export const merge_sort = (array: any[]): any[] => {
  if (array.length < 2) return array;
  const merge = (left: any[], right: any[]) => {
    let result = [];
    while (left.length > 0 && right.length > 0) {
      if (left[0] <= right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    while (left.length > 0) {
      result.push(left.shift());
    }
    while (right.length > 0) {
      result.push(right.shift());
    }
    return result;
  }
  let result: any[] = merge(merge_sort(array.slice(0, Math.floor(array.length / 2))), merge_sort(array.slice(Math.floor(array.length / 2))));
  return result;
}

