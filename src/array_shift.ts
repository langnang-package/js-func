import { array_slice } from "./array_slice";
/**
 * @name array_shift
 * @description 删除数组的第一个元素，并返回该元素的值。此方法更改原始数组。
 * @param {Array} array 需要处理的数组。
 * @returns {*} 从数组中删除的元素; 如果数组为空则返回 undefined 。
 * @reference https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
 */
export const array_shift = (array: any[]) => {
  const shift = array[0];
  array = array_slice(array, 1);
  return shift;
};
