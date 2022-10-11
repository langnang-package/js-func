/**
 * @name array_find
 * @description 遍历数组，返回第一个通过 `predicate` 迭代函数检测的元素值，如果没有元素通过检测则返回 `undefined`。
 * @param {Array} array 需要处理的数组。
 * @param {Function} predicate 每次迭代调用的函数。
 * * @param {*} element 当前遍历到的元素。
 * * @param {Number} index 当前遍历到的索引。
 * * @param {Array} array 数组本身。
 * @param {Number} form_index 开始搜索的索引位置。
 * @param {*} this_arg 执行回调时用作 `this` 的对象。
 * @returns {*} 数组中第一个满足所提供测试函数的元素的值，否则返回 undefined。
 * @tutorial https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find
 * @tutorial https://www.lodashjs.com/docs/lodash.find
 * @tutorial https://underscorejs.net/#find
 */
export const array_find = (array: any[], predicate: any, form_index: number = 0, this_arg: any = null) => {
  form_index = (form_index < 0 || form_index > array.length) ? 0 : form_index;
  for (let i = form_index; i < array.length; i++) {
    if (predicate(array[i], i, array)) {
      return array[i];
    }
  }
  return undefined;
};
