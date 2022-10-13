/**
 * @name array_sort
 * @description 使用原地算法对数组的元素进行排序，并返回数组。此方法更改原始数组。
 * @tag Array 数组
 * @syntax array_sort(array, iteratee(a, b));
 * @param {Array} array 需要处理的数组。
 * @param {Function} iteratee 每次迭代调用的函数。
 * * @param {*} a 第一个用于比较的元素。
 * * @param {*} b 第二个用于比较的元素。
 * @returns {Array} 排序后的数组。
 * @tutorial https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 */
export const array_sort = (array: any[], iteratee: any = null): any[] => {
  // in-place 原地算法
  if (!iteratee) iteratee = array_sort_iteratee;

  let index = 0;
  while (index < array.length) {
    for (let i = index; i <= array.length - 1; i++) {
      let compare = iteratee(array[index], array[i]);
      if (compare > 0) {
        [array[index], array[i]] = [array[i], array[index]];
      }
    }
    index++;
  }
  return array;
};

export const array_sort_iteratee = (a: any, b: any): any => {
  return a.toLocaleString().localeCompare(b.toLocaleString());
}

export const array_sort_iteratee_charat = (a: any, b: any, index: number = 0): any => {
  let result = a.toLocaleString().charCodeAt(index) - b.toLocaleString().charCodeAt(index);
  if (result == 0) {
    return array_sort_iteratee_charat(a, b, index + 1);
  } else {
    return result;
  }
}