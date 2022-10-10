import { _from_index } from "./_form_index";
/**
 * @name array_index
 * @description 数组中可以找到给定元素的第一个索引，如果不存在，则返回 -1。
 * @param {Array} array 需要处理的数组。
 * @param {*} value 要查找的元素。
 * @param {Number} [from_index = 0] 起始索引，默认值为 0。
 * @returns 首个被找到的元素在数组中的索引位置; 若没有找到则返回 -1。
 * @reference https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 * @reference https://www.lodashjs.com/docs/lodash.indexOf
 * @reference https://underscorejs.net/#indexOf
 */
export const array_index = (array: any[], value: any, from_index: number = 0) => {
  from_index = _from_index(array.length, from_index);

  for (let i = from_index; i <= array.length - 1; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
};
