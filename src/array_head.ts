/**
 * @name array_head
 * @description 获取数组的前 `n` 个元素。
 * @tag Array 数组
 * @syntax array_head(array, [n = 1]);
 * @param {Array} array 需要处理的数组。
 * @param {Number} [n = 1] 获取的元素个数
 * @returns {Array}
 * @tutorial https://www.lodashjs.com/docs/lodash.head
 */
import { array_slice } from "./array_slice";
export const array_head = (array: any[], n: number = 1) => {
  if (n <= 1) return array[0];
  if (n >= array.length) return [...array];
  return array_slice(array, 0, n);
};

export const array_head_by_for = (array: any[], n: number = 1) => {
  if (n <= 1) return array[0];
  if (n >= array.length) return [...array];
  let result = [];
  for (let i = 0; i <= n - 1; i++) {
    result[i] = array[i];
  }
  return result;
}

export const array_head_by_proto = (array: any[], n: number = 1) => {
  if (n <= 1) return array[0];
  if (n >= array.length) return [...array];
  return array.slice(0, n);
}